const Users = require("../models/user.model");

class UsersService {
async getAll(){
    try { 
        const users = await Users.findAll()
        if(!users){
            return false
        }
        return users;
    } catch (error) {
        console.log(error)
    }
}
}

module.exports = new UsersService();