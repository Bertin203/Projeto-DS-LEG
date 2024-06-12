const Sequelize = require('sequelize')
const db = require('../db/connection')

const Cliente = db.define('clientes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true  
    },
    cpf: {
        type: Sequelize.STRING,
    }, 
    nome: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    }
})

module.exports = Cliente