const Sequelize = require('sequelize')
const db = require('../db/connection')

const Funcionario = db.define('funcionarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }, 
    nome: {
        type: Sequelize.STRING,
    }
})

module.exports = Funcionario