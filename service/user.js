const fs= require('fs')
class User {
    constructor() {
        this.users = []
    }
    addUser(name, age, role, email) {
        // read file and get user
        // update the user array
        // write to the file again with updated user array
        const user = {
            name,
            age,
            role,
            id: this.users.length + 1,
            email
        }
        this.users.push(user)

        return user
    }

writeUsersInFile(users){
    fs.writeFile()
    
}

    getUserById(id) {
        const user = this.users.filter((user) => {
            if (id === user.id) {
                return true
            }
            return false
        })


        if (user.length) {
            return user[0]

        }
        return false
    }

    getUserByEmailId(email) {
        const user = this.users.filter
            ((user) => {
                if (email === user.email) {
                    return true
                }
                return false
            })
        return user
    }

    // diff b/w getUserById and getUserByEmailId-

    /**
     * getUserById- returns object/false
     *  getUserByEmailId- returns array/UTF-8 encoding)
     *  */ 

     /**2. When match found
      * getUserById- Returns first matching object
      * getUserByEmailId- returns arrayof matches (could be 1 or many)
      * 
      * 3. When match not found
      * getUserById- returns false
      * getUserByEmailId- Returns empty array []
      * 
      */


    getAllUser() {
        return this.users
    }

    updateUser(id, user) {//user-new user
        //new user is taken as i/p.Benefit- becuase if we want to update all the fields(age,name,email) it can be done in one go
        const existingUser = this.getUserById(id)
        if (!existingUser) {
            return false
        }

        this.users = this.users.map((u) => {
            if (u.id === id) {
                return user//new user
            }
            return u// old user=u
        })

        const updatedUser = this.getUserById(id)
        return updatedUser

    }

    deleteUser(id) {
        const user = this.getUserById(id)
        if (!user) {
            return false
        }
        this.users = this.users.filter((u) => {
            if (id === u.id) {
                return false
            }
            return true
        })
        return true
    }
}

const user = new User()
const exportData = { user }
module.exports = exportData

//  exportData = {
//   user: user
// }









/**
 * const user= new User()
 * const exportData={user}...>exporting user object,
 * module.exports=exportData...>
 * way to share data b/w fiiles in node js
 * 
 * 
 * const service=require('filename')...>load/import what we exported
 * const user=service.user...>take outapp.use(express.json()) // to parse request and app is a Express server
 the user object
 * 
 * const{user}=require('filename')..>can be written in single line
 * 
 */