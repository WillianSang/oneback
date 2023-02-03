const { Router } = require("express");
const { getTasks } = require("../controllers/tasks.controller");


const routerTask =  Router()
const path = "/tasks"

routerTask.get(`${path}`, getTasks)


module.exports = routerTask