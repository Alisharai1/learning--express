// Express is a web application framework for Node.js(a tool built on top of Node.js).
// importing 3 modules, 1.express,exp-validator,
//line 5-11- importing momdules

const express = require('express')

const { query, body, validationResult, } = require('express-validator');
// express-validator is a Node.js library that works with Express.js.
// xpress Validator (library)= easy, declarative way to check your request data before using it.
//the query() function from express-validator is a middleware that allows you to validate query parameters in incoming requests.
//(query validates query params, body validates request body, validationResult extracts errors)


//import user service, the code that updates.deletes, add users
const { user } = require('./service/user')//file location 
// const service = require('./service/user')//file location 
// const user = service.user


const app = express()// initialize express, here we are creating express object called app

app.use(express.json())// to parse request and app is a EXpress server

//Logging middleware.
// Advantage-Debugging – You can see which routes are being hit and what methods clients are using.Useful if a route isn’t working or returning errors.
app.use((req, res, next) => {
    console.log("incoming request", req.method, req.originalUrl);//Every request will log the HTTP method and URL.
    next()//passes control to the next middleware or route handler.
})

//controller start

const f1 = (req, res, next) => {
    console.log("I love Alisha");
    next()
}
const f2 = (req, res, next) => {
    console.log("I love Ajay");
    next()
}

const f3 = (req, res) => {
    /**
     * req.body -> post, patch, put
    req.params -> *
    req.query -> *
    req.header -> *
    req.originalUrl -> logging
    req.baseUrl -> logging
     */

    const result = validationResult(req); //validation is done (query('email').isEmail()) already in previous middleware now the error is extracted using validationResult
    if (!result.isEmpty()) { // true if there are no errors, false otherwise
        res.status(400).json({ errors: result.array() })//Gets the validation errors as an array
        return
    }
    const email = req.query.email// In short: This line extracts the email value from the URL query parameters and saves it in a variable for later use.
    let output
    if (email) {
        output = user.getUserByEmailId(email)
    } else {
        output = user.getAllUser()
    }


    res.status(200).json(output)// to sent the json from js object
}

/**
 * ✅ Overall Concept of This Pattern

Validate input → make sure request is correct (express-validator).

Stop if invalid → prevent wrong or dangerous data from being processed.

Extract useful data → save query parameters like email.

Conditional logic based on input → fetch one user or all users depending on what the client sent.

This is a very common Express.js pattern:

Validation middleware → check errors → extract input → perform logic → send resp
 */

app.get('/', query('email').isEmail(), f3)

app.post('/', [body('age').isInt().withMessage("Age must be a number"), body('name').isString().withMessage("name must be string"),
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



app.get('/:id',(req, res) => {
    const id = Number(req.params.id)//path par are always string, hence convecrting to number
    const u = user.getUserById(id)
    if (u) {
        res.status(200).json(u)
        return
    }

    res.status(404).json({ message: "user not found" })


})



app.put('/:id', (req, res) => {
    const id = Number(req.params.id)//id is a route parameter — whatever the client puts in that part of the URL becomes req.params.id.
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
