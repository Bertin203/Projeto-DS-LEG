const Sequelize = require('sequelize')
const db = require('../db/connection')

const VendaHasProduto = db.define('venda_has_produtos', {
    id_venda: {
        type: Sequelize.INTEGER,
    },
    id_produto: {
        type: Sequelize.INTEGER,
    },
})

module.exports = VendaHasProduto