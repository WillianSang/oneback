const { Router } = require("express");
const { getProjects } = require("../controllers/projects.controller");

const routerProject =  Router()
const path = "/projects"

routerProject.get(`${path}`, getProjects )

module.exports = routerProject