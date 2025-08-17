const express = require('express')
// const service = require('./service/user')//file location 
// const user = service.user
const { query, body, validationResult, } = require('express-validator');//importing query and validation result, which are two methods of exp validator
const { user } = require('./service/user')//file location 

const app = express()

app.use(express.json())// to parse request

app.use((req, res, next) => {
    console.log("incoming request", req.method, req.originalUrl);
    next()
})

//controller start
// const f1 = (req, res, next) => {
//     console.log("I love Alisha");
//     next()
// }
// const f2 = (req, res, next) => {
//     console.log("I love Ajay");
//     next()
// }

const f3 = (req, res) => {
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

    const result = validationResult(req); //validation is done (query('email').isEmail()) already in previous middleware now the error is extracted using validationResult
    if (!result.isEmpty()) { // true if there are no errors, false otherwise
        res.status(400).json({ errors: result.array() })//Gets the validation errors as an array
        return
    }
    const email = req.query.email
    let output
    if (email) {
        output = user.getUserByEmailId(email)
    } else {
        output = user.getAllUser()
    }


    res.status(200).json(output)// to sent the json from js object
}

app.get('/', query('email').isEmail(), f3)

app.post('/', [body('age').isInt().withMessage("Age must be a number and at least 18"),body('name').isString().withMessage("name must be string"),
    body('email').isEmail().withMessage("invalid email")
], (req, res) => {

    const result = validationResult(req); //validation is done (query('email').isEmail()) already in previous middleware now the error is extracted using validationResult
    if (!result.isEmpty()) { // true if there are no errors, false otherwise
        res.status(400).json({ errors: result.array() })//Gets the validation errors as an array
        return
    }

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
    const u = user.updateUser(id, body)
    if (u) {

        res.status(200).json(u)
        return
    }
    res.status(404).json({ message: "user not found" })


})

app.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    const isSuccessful = user.deleteUser(id)
    if (isSuccessful) {
        res.status(200).json({ message: "success" })
        return
    }
    res.status(404).json({ message: "user not found" })
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
