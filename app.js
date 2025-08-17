const express = require('express')
const service = require('./service/user')//file location 
const user = service.user

const app = express()

app.use(express.json())// to parse request

app.use((req, res, next) => {
    console.log("incoming request", req.method, req.originalUrl);
    next()
})

//controller start

app.get('/', (req, res) => {
    /**
     * req.body -> post, patch, put
    req.params -> *
    req.query -> *
    req.header -> *
    req.originalUrl -> logging
    req.baseUrl -> logging
     * 
     * 
     */
    const email = req.query.email
    let output
    if (email) {
        output = user.getUserByEmailId(email)
    } else {
        output = user.getAllUser()
    }


    res.status(200).json(output)// to sent the json from js object
})

app.post('/', (req, res) => {
    const body = req.body
    // parse --> validate -> service -> repo
    const newUser = user.addUser(body.name, body.age, body.role, body.email)
    res.status(201).json(newUser)
})

app.get('/:id', (req, res) => {
    const id = Number(req.params.id)//path par are always string, hence convecrting to number
    const u = user.getUserById(id)
    if (u) {
        res.status(200).json(u)
        return
    }

    res.status(404).json({ message: "user not found" })
})

app.put('/:id', (req, res) => {
    const id = Number(req.params.id)
    const body = req.body
    user.updateUser(id, body)
    res.status(200).json("success")

})

app.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    user.deleteUser(id)
    res.status(200).json("success")


})

//controller end

const port = 4000
app.listen(port, (err) => {
    if (err) {
        console.log("error is:", err);
    } else {
        console.log(`app listening on port ${port}`)
    }
})
