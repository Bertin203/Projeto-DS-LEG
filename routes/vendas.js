const express = require('express')
const router = express.Router()
const Venda = require('../models/Venda')
const Produto = require('../models/Produto')


// GET Venda
router.get("/", (req, res) => {
    Venda.findAll({order: [
        ['id', 'ASC']
    ]})
    .then(vendas => {
        res.render('vendas', {
            vendas
        })
    })
})

// GET Venda by ID
router.get("/editar_venda/:id", (req, res) => Venda.findOne({
    where: {id: req.params.id}
}).then(venda =>{
    res.render('editarVenda', {
        venda
    });
}).catch(err => console.log(err)));


// GET Renderizar Form
router.get('/novaVenda', (req, res) => {
    res.render('novaVenda');
});

// POST Venda
router.post('/novaVenda', (req, res) => {
    let {id, data, id_cliente, id_funcionario} = req.body;  

    Venda.create({
        id,
        data,
        id_cliente,
        id_funcionario
    })
    .then(() => res.redirect('/adm/vendas'))
    .catch(err => console.log(err));
});

// "PUT" Venda
router.post('/editar', (req, res) => {
    let {id, data, id_cliente, id_funcionario} = req.body;
    
    let dados = {id, data, id_cliente, id_funcionario}; 

    Venda.update(dados, {where: {id: id}})
    .then(() =>{
        res.redirect('/adm/vendas');
    })
    .catch(err => {console.log(err)});
});


// DELETE Venda
router.get('/deletar_venda/:id', (req, res) =>{
    const id = req.params.id;
    Venda.destroy({where: {id: id}})
    .then(() => {
        res.redirect('/adm/vendas');
    })
    .catch(err => {console.log(err)});;
});

module.exports = router