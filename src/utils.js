const User = require("./models/users")

module.exports = {
    createStore: () => {
        const users = User.find().map(user => {
            return user
        })
        return { users }
    }
}
