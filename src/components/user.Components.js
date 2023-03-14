import UserService from "../services/userService.js"

console.log("User component yüklendi")

let UserService =new UserService

UserService.add()
UserService.getById()
UserService.list() 