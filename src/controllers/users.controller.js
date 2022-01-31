const usersService = require("../services/users.service");
class UsersController{
async getAll(req,res){
    const users = await usersService.getAll()
    if (users == false){
        res.status(404).send("пользователей нет")
    } 
    res.json(users)
}
}
module.exports = new UsersController();