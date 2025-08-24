/**
 * Create a Book class with properties title and author.

Add a method getDetails() that prints "Title by Author".

Create 2 objects and call the method.

Create a Circle class with property radius.

Add a method getArea() that returns the area of the circle.

Create a Student class with properties name and marks.

Add a method hasPassed() that prints "Passed" if marks ≥ 40, otherwise "Failed".
 */

// class Book {
//     constructor(title, author) {
//         this.title = title
//         this.author = author
//     }
//     getDetails() {
//         console.log(`Title: ${this.title} Author: ${this.author}`);
//     }
// }

// const b = new Book('cvh', 'avbj')
// const b1 = new Book('bnjvh', 'kjloyv')

// b.getDetails()
// b1.getDetails()

// class Circle {
//     constructor(radius) {
//         this.radius = radius
//     }
//     getArea() {

//         return Math.PI * Math.pow(this.radius, 2)
//     }


// }
// const c = new Circle(5)
// let output = c.getArea()

// console.log("area of circle:", output);

// class Student {
//     constructor(name, marks) {
//         this.name = name
//         this.marks = marks
//     }
//     hasPassed() {
//         if (this.marks >= 40) {
//             console.log("passed");
//             return

//         }
//         console.log("failed");

//     }

// }
// const s = new Student("Ajay", 38)
// s.hasPassed()


/**
 * Create a BankAccount class with properties accountNumber, balance.

Add methods deposit(amount) and withdraw(amount) which update balance.

Prevent withdrawing more money than available.

Create a Rectangle class with properties length and width.

Add methods getArea() and getPerimeter().

Create a Person class with properties name, age.

Add a method celebrateBirthday() that increases the age by 1.
 */


// class BankAccount {
//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber
//         this.balance = balance
//     }
//     deposit(amount) {
//         this.balance = amount + this.balance
//         console.log(this.balance);


//     }
//     withdraw(amount) {
//         if(this.balance<amount){
//             console.log("bank balance is low");
//             return

//         }

// this.balance = this.balance - amount
//         console.log(this.balance);


//     }
// }

// const b = new BankAccount(100301001997, 18000)
// b.deposit(5000)
// b.withdraw(200000)

// class Person {
//     constructor(name, age) {

//         this.name = name
//         this.a = age
//     }

//     celebrateBirthday() {
//         this.a= this.a + 1
//         return this.a

//     }
// }

// const p = new Person("Ajay", 31)
// let output= p.celebrateBirthday()
// console.log(output);


/**
 * Advanced (a bit tricky)

Create a Teacher class with properties name, subject, students (array).

Add a method addStudent(studentName).

Add a method showStudents() that lists all students.

Create a Movie class with properties title, rating (1–5).

Add a static method compare(movie1, movie2) that returns the movie with a higher rating.

Create a MyFile class (your earlier example).

Add CRUD methods (create, read, update, delete) using fs.
 */

// class Teacher {
//     constructor(name, subject, students) {
//         this.name = name
//         this.subject = subject
//         this.students = students

//     }

//     addStudent(studentName) {

//         this.students.push(studentName)

//     }
//     showStudents() {
//         this.students.forEach((ele) => {
//             console.log(ele);

//         })

//     }
// }
// const s = new Teacher("Alisha", "Maths", ['Ajay', 'Aryan', 'Dharshik'])
// s.addStudent("KIttu")
// s.showStudents()


// class Movie {
//     constructor(title, rating) {
//         this.title = title
//         this.rating = rating
//     }

//     static compare(movie1, movie2) {
//         if (movie1.rating > movie2.rating) {
//             return movie1
//         }
//         return movie2
//     }
// }

// const m1 = new Movie("KGF", 4.1)
// const m2 = new Movie("XXX", 4.9)
// let output = Movie.compare(m1, m2)
// console.log(output);

// const fileSys = require('fs')
// class MyFile {

//     constructor(filePath) {
//         this.filePath = filePath

//     }
//     create(data) {
//         fileSys.writeFileSync(this.filePath, JSON.stringify(data))

//     }
//     update(data) {
//         fileSys.appendFileSync(this.filePath, JSON.stringify(data))

//     }


//     delete() {
//         fileSys.unlinkSync(this.filePath)

//     }

//     read() {
//         const info = fileSys.readFileSync(this.filePath, { encoding: 'utf-8' })
//         return info
//     }
// }

// const f = new MyFile("human2.json")
// f.create(['neha', 'ankita', 'komal'])
// f.update({ name: "hjhgd" })
// // f.delete()
// let output = f.read()
// console.log(output);

/**
 * Create a Student class with:

Properties: name, marks (array).

Method addMark(mark) → adds a mark to the array.

Method getMarks() → returns all marks.
 */

// class Student {
//     constructor(name, marks) {
//         this.name = name
//         this.marks = marks
//     }
//     addMark(mark) {
//         this.marks.push(mark)
//         console.log(this.marks);

//     }
//     getMarks() {

//         return this.marks

//     }

// }
// const s = new Student("Alisha", [56, 78, 34, 89])
// s.addMark(55)
// let marksList = s.getMarks()
// console.log(marksList);


/**
 * Create a StringHelper class with:

Method getLength(str) → returns number of characters.

Method makeUpper(str) → returns the string in uppercase.
 * 
 
 */

class StringHelper {

    getLength(str) {
        const chars = str.split("")
        const output = chars.filter((c) => c !== " ")
        return output.length

    }

    makeUpper(str) {
        return str.toUpperCase()

    }

}
const s = new StringHelper()
let output = s.getLength("Mathematics and Physics")
console.log(output);
let output2 = s.makeUpper("Physics")
console.log(output2);





