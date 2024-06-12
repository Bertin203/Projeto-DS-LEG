const Sequelize = require('sequelize')
const db = require('../db/connection')

const Produto = db.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }, 
    descricao: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.REAL,
    }
})

module.exports = Produto