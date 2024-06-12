const Sequelize = require('sequelize')
const db = require('../db/connection')

const Venda = db.define('vendas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    data: {
        type: Sequelize.TEXT
    },
    id_cliente: {
        type: Sequelize.INTEGER
    },
    id_funcionario: {
        type: Sequelize.INTEGER
    }
})

module.exports = Venda