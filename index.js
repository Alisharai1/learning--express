// express- web server f/w, axios- http client f/w
/** use-middleware...needs 1call back, 3 i/p
 * 
 */
const express = require('express')// import
const app = express()//initialize
app.use(express.json())
app.use((req, res, next) => {
    console.log("incoming request", req.method, req.originalUrl);
    next()

})
app.get('/', (req, res, next) => {
    // res.send('I love Ajay my husband')
    // res.json({comment:"I like food"})
    res.setHeader("Hero", "JOhn Ibrahim")
    res.status(404).setHeader("ALisha", 29).json([2, 4, 6, 8])
    next()
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(404).setHeader("ALisha", 29).json([2, 4, 6, 8])

})
// app.use((req, res, next) => {
//     console.log("i");

// })

app.listen(4000, (err) => {
    if (err) {
        console.log("error is:", err);
    } else {

        console.log(`Example app listening on port 4000`)
    }
})
