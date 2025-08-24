const fileSystem = require('fs')
class MyFile {
    constructor(filePath) {
        this.filePath = filePath

    }
    create(data) {
        fileSystem.writeFileSync(this.filePath, JSON.stringify(data))

    }
    read() {
        const data = fileSystem.readFileSync(this.filePath, { encoding: "utf-8" })
        const returnOutput = JSON.parse(data)

        return returnOutput

    }
    update(data) {
        fileSystem.appendFileSync(this.filePath, JSON.stringify(data))
    }

    delete() {
        fileSystem.unlinkSync(this.filePath)

    }
}

const file = new MyFile("data.json")
// file.create({ name: "Ajay", age: 28 })
// let output = file.read()
// console.log(output);
// console.log(typeof output, output);

// console.log(typeof returnOutput, returnOutput);
// returnOutput.name = "Anklu"
// console.log(returnOutput);

module.exports = { file }
// I have understood all the above code- Alisha Rai


