const express = require("express")
const server = express()
const routerProject = require("../routers/projects.router")
const routerTask = require("../routers/tasks.router")

//routes
server.use(routerProject)
server.use(routerTask)



module.exports = server