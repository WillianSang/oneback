const { DataTypes } = require("sequelize");
const baseData = require("../database/conection");


const Project = baseData.define("projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
  name: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING
  }
})

module.exports = Project