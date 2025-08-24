/**
 * class - myFile
 * const- i/p- filepath
 * add CRUD Method to it
 * 
 */
const fs = require('fs')
class MyFile {
    constructor(filePath) {
        this.filePath = filePath

    }

    createAndWrite(content) {
        fs.writeFileSync(this.filePath, JSON.stringify(content))

    }



}
const f = new MyFile('index1')
f.createAndWrite({
    name: "k"

})