const fs = require('fs')
// fs.writeFileSync('app2.json', JSON.stringify([]))
fs.writeFileSync('app2.json', JSON.stringify([{
    "name": "Aja2y",
    "age": 29,
    "role": "SDE",
    "id": 1,
    "email": "alishamrai92@gmail.com"
}]))


fs.writeFile("app.txt", "I love javascript", (err) => {
    if (err) {
        console.log(err);

    }
    else {
        console.log("file created successfully");

    }
})
fs.appendFileSync('app2.txt', "I hate n")
fs.appendFile("app.txt", " I am learning file system", (err) => {
    if (err) {
        console.log(err);

    }
    else {
        console.log("file created successfully");

    }
})
const data = fs.readFileSync('app.tx', { encoding: 'utf-8' })
console.log(data);

fs.readFile("app.txt", "utf8", (err, data) => {
    if (err)
        throw err;
    console.log("📖 File content:", data);
});

fs.unlink("app.txt", (err) => {
    if (err) {
        console.log(err);

    }
    else {
        console.log("file deleted successfully");

    }
})

