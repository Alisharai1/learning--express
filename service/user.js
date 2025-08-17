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

    getAllUser() {
        return this.users
    }

    updateUser(id, user) {
        const existingUser = this.getUserById(id)
        if (!existingUser) {
            return false
        }

        this.users = this.users.map((u) => {
            if (u.id === id) {
                return user
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