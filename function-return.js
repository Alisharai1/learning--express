/**
 * Create an EcommerceCart class with:-class define

Property: items (array of {name, price, qty}).-constr and this initialization, and array of objects
{
//     name,
//     price,
//     qty
// }...>[obj1,obj2]

Methods:

addItem(name, price, qty) → returns updated cart.. push each obj in items array and returns that array

removeItem(name) → returns updated cart.----items.filter , and returns the updated items array

getTotal() → return total cost of all items.---> items.foreach and returns total cost

checkout() → return a message "Order placed: Rs <total>" and reset cart. return"....""
 */
// 


// class EcommerceCart {
//     constructor(items) {
//         this.items = items

//     }

//     addItem(name, price, qty) {
//         this.items.push({
//             name,
//             price,
//             quantity: qty
//         })
//         return this.items
//     }

//     removeItem(name) {
//         this.items = this.items.filter((item) => {
//             if (name !== item.name) {
//                 return true
//             }

//             return false
//         })

//         return this.items

//     }

//     getTotal() {
//         let total = 0
//         this.items.forEach((itemObj) => {

//             total += itemObj.quantity * itemObj.price

//         })
//         return total
//     }

//     checkOut() {
//         const totalCost = this.getTotal()
//         this.items = []
//         return `Order placed: Rs ${totalCost}`

//     }

// }

// const cart = new EcommerceCart([])
// let value = cart.addItem("drinks", 10, 2)
// value = cart.addItem("drink2", 100, 4)
// value = cart.addItem("drink3", 190, 3)
// value = cart.addItem("drink4", 140, 1)
// value = cart.addItem("drink5", 120, 5)

// console.log(value);

// console.log("removing item");
// value = cart.removeItem("drinks")
// console.log(value);
// console.log("calculating total of all items");

// const total = cart.getTotal()
// console.log(total);

// console.log("checking out");
// const s = cart.checkOut()
// console.log(s);


// console.log(cart.items);


// class Employee {
//     constructor(id, name, salary) {
//         this.id = id
//         this.name = name
//         this.salary = salary
//     }

//     getAnnualSalary() {
//         return this.salary * 12

//     }
//     raiseSalary(percent) {
//         this.salary += this.salary * percent / 100
//         return this.salary
//     }
// }

// const emp = new Employee(1, "Ajay", 20000)
// const output = emp.getAnnualSalary()
// console.log(output)
// const output1 = emp.raiseSalary(20)
// console.log(output1)

/**
 * class Course{
     constructor(courseName, students ){
         this.courseName=courseName
         this.students=students
     }
     addStudent(studentName) {
       
         this.students.push(studentName)
         return this.students
     }
     removeStudent(studentName){
         let isSuccess = false
      this.students= this.students.filter((f)=>{
          if(studentName===f){
              isSuccess=true
              return false
          }
          return true
      })
      
      if(isSuccess){
          return "suucess"
      }
      
      return "failure"
     }
     
    getTopper(marksMap){
       let output= {name:"",score:0}
        for(let key in marksMap){
            console.log(key)
            console.log(marksMap[key])
            if(marksMap[key]>output.score){
                output={name:key,score:marksMap[key]}
            }
            
        }
       
        return output.name
         

         }  
 }
 
//   const a= [2,6,4,9]
 
//  for(let i=1;i<a.length;i++){
//      if(a[0]<a[i]){
//           temp=a[i]
//      }
    
//  }
//  console.log(temp)
 
 const c= new Course("Java",[])
 let output= c.addStudent("Alisha")
  output= c.addStudent("Ajay")
 console.log(output)
 let s= c.removeStudent("Ankit")
 console.log(s)
 c.getTopper({"John": 85, "Ravi": 92})
 */

// class Product{
//      constructor(id,name,price,stock){
//          this.id= id
//          this.name=name
//          this.price=price
//          this.stock=stock
//      }
//      addStock(qty){
//          this.stock+= qty
//          return this.stock
//      }
//      sell(qty){
//          if(this.isAvailable(qty)){
//              this.stock-= qty
//          const billAmount= this.price*qty
//          return billAmount
//          }
//          throw new Error("insufficient stock")
//      }
//      isAvailable(qty) {
//          return this.stock>=qty
//      }


//  }

//  const product= new Product(101,"books",150,12)
//  let newStock= product.addStock(5)
//   newStock= product.addStock(15)

//  console.log(newStock)

//  let s= product.sell(35)
//  console.log(s)

/**
 * Task Manager
Create a TaskManager class with tasks stored as objects: { id, title, status }.

addTask(title) → returns task object with id.

completeTask(id) → marks status as "done", return updated task.

getPendingTasks() → return array of pending tasks.

getCompletedTasks() → return array of completed tasks.
 */



// class TaskManager {
//     constructor(tasks) {
//         this.tasks = tasks

//     }
//     addTask(title) {
//         const taskObj = {
//             id: (this.tasks.length) + 1,
//             title: title,
//             status: "pending"
//         }
//         this.tasks.push(taskObj)
//         return taskObj
//     }
//     completeTask(id) {
//         //   for(let task of this.tasks){
//         //       if(id===task.id){
//         //           task.status="done"
//         //       return task
//         //       }

//         //   } 
//         //   throw new Error("no such id found")

//         const task = this.tasks.find((t) => {
//             if (id === t.id) {
//                 return true
//             }
//             return false
//         })
//         if (task) {
//             task.status = "done"
//             return task
//         }
//         throw new Error("no such id found")

//     }

//     getPendingTasks() {
//         const pendingTask = this.tasks.filter((task) => {
//             if (task.status === "pending") {
//                 return true
//             }
//             return false
//         })
//         return pendingTask
//     }

//     getCompletedTasks() {
//         const completedTask = this.tasks.filter((task) => {
//             if (task.status === "done") {
//                 return true
//             }
//             return false
//         })
//         return completedTask
//     }

// }

// const t = new TaskManager([])
// let output = t.addTask("learning Javascript")
// output = t.addTask("learning Docker")
// output = t.addTask("learning EXpress")
// console.log(t.tasks)
// let output2 = t.completeTask(2)
// console.log(t.tasks)
// let output3 = t.getPendingTasks()
// console.log(output3)
// let output4 = t.getCompletedTasks()
// console.log(output4)

/**
 * Online Voting System
Create a VotingSystem class with:

Candidates stored in { name, votes }.

addCandidate(name) → returns updated candidate list.

vote(candidateName) → adds a vote, return updated vote count.

getWinner() → return candidate with max votes.

Movie Ticket Booking
Create a Cinema class with:

Properties: seats (array of seat numbers).

bookSeat(seatNo) → return "Booked" if free, "Already booked" otherwise.

cancelSeat(seatNo) → free the seat, return status.

getAvailableSeats() → return array of free seats.

E-Wallet System
Create a Wallet class with:

Properties: balance, transactions (array of {type, amount, date}).

addMoney(amount) → return updated balance.

spendMoney(amount) → return updated balance or "Insufficient funds".

getTransactionHistory() → return array of transactions.

getMonthlySpending(month) → return total spending in that month.
 */



// class Bank {
//     constructor(bankAccounts) {
//         this.bankAccounts = bankAccounts
//     }
//     createAccount(name, initialBalance) {
//         const account = {
//             name,
//             balance: initialBalance,
//             accountNumber: this.bankAccounts.length + 1
//         }
//         this.bankAccounts.push(account)
//         return account
//     }

//     findAccount(accountNumber) {
//         return this.bankAccounts.find((acc) => {
//             if (accountNumber === acc.accountNumber) {
//                 return true
//             }
//             return false

//         })
//         //      return detail
//     }


//     transfer(fromAcc, toAcc, amount) {
//         /**
//          * find if that account exist or not and then account detail validation
//          * balnce>amt-fromACC
//          * balance-update=toacc
//          * balance+=amount
//          * balance-=amount
//          * return success
//          */

//         const fromAccDetail = this.findAccount(fromAcc)
//         const toAccDetail = this.findAccount(toAcc)

//         if (!fromAccDetail || !toAccDetail) {
//             return "account not found"
//         }
//         if (fromAccDetail.balance >= amount) {
//             fromAccDetail.balance -= amount
//             toAccDetail.balance += amount
//             return "successful"
//         }
//         return "insufficient balance"

//     }

// }

// const bank = new Bank([])
// let b = bank.createAccount("Alisha", 0)
// b = bank.createAccount("Ajay", 10000)
// b = bank.createAccount("kittu", 20000)
// b = bank.createAccount("Manisha", 40000)
// console.log(bank.bankAccounts)
// const b1 = bank.findAccount(3)
// console.log(b1)
// const b2 = bank.transfer(4, 1, 300000)
// console.log(b2)
// console.log(bank.bankAccounts)


/**
 * line Voting System
Create a VotingSystem class with:

Candidates stored in { name, votes }.

addCandidate(name) → returns updated candidate list.

vote(candidateName) → adds a vote, return updated vote count.

getWinner() → return candidate with max votes.
 */

// class VotingSystem {
//     constructor(candidates) {
//         this.candidates = candidates
//     }
//     addCandidate(name) {
//         const candidate = {
//             name,
//             vote: 0

//         }

//         this.candidates.push(candidate)
//         return this.candidates
//     }

//     vote(candidateName) {

//         const candidate = this.candidates.find((c) => {
//             if (candidateName === c.name) {

//                 return true
//             }
//             return false

//         })
//         if (candidate) {
//             candidate.vote += 1
//             return candidate.vote
//         }

//     }

//     getWinner() {
//         let output = { name: "", vote: 0 }
//         for (let element of this.candidates) {
//             if (element.vote >= output.vote) {
//                 output = element
//             }
//         }
//         return output
//     }

// }

// const c = new VotingSystem([])
// let ans = c.addCandidate("Alisha")
// ans = c.addCandidate("Ajay")
// ans = c.addCandidate("KIttu")
// ans = c.addCandidate("Ram")
// console.log(c.candidates)
// let voting = c.vote("Ajay")
// voting = c.vote("Ajay")
// voting = c.vote("Ajay")
// console.log(voting)
// console.log(c.candidates)
// const winner = c.getWinner()
// console.log(winner)

/**
 * 
Movie Ticket Booking
Create a Cinema class with:

Properties: seats (array of seat numbers).

bookSeat(seatNo) → return "Booked" if free, "Already booked" otherwise.

cancelSeat(seatNo) → free the seat, return status.

getAvailableSeats() → return array of free seats.

 */


// class Cinema{
//     constructor(totalSeat){
//         this.seats=[]
    
//         for(let i=0;i<totalSeat;i++){
//             this.seats.push(0)
//         }
//     }
//     bookSeat(seatNo){
//       if(this.seats[seatNo-1]===1){
//           return "already occupied"
//       }
//       this.seats[seatNo-1]=1
//       return "booked"
//     }
// }
// const c= new Cinema(5)
// console.log(c.seats)
// const c1= c.bookSeat(3)
// const c2= c.bookSeat(3)

// console.log(c1)
// console.log(c.seats)
