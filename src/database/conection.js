const { Sequelize } = require("sequelize");

const baseData = new Sequelize("dataTask", "root", "9428", {
  host: "localhost",
  dialect: "mysql"
})

module.exports = baseData