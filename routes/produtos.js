const express = require('express')
const router = express.Router()
const Produto = require('../models/Produto')


// GET Produto
router.get("/", (req, res) => {
    Produto.findAll({order: [
        ['id', 'ASC']
    ]})
    .then(produtos => {
        res.render('produtos', {
            produtos
        })
    })
})

// GET Produto by ID
router.get("/editar_produto/:id", (req, res) => 
    Produto.findByPk(req.params.id)
        .then(produto =>{
        res.render('editarProduto', {
            produto
        });
}).catch(err => console.log(err)));


// GET Renderizar Form
router.get('/novoProduto', (req, res) => {
    res.render('novoProduto');
});

// POST Produto
router.post('/novoProduto', (req, res) => {
    let {id, descricao, valor} = req.body;  

    Produto.create({
        id,
        descricao,
        valor
    })
    .then(() => res.redirect('/adm/produtos'))
    .catch(err => console.log(err));
});

// "PUT" Produto
router.post('/editar', (req, res) => {
    let {id, descricao, valor} = req.body;   
    
    let dados = {id, descricao, valor}; 

    Produto.update(dados, {where: {id: id}})
    .then(() =>{
        res.redirect('/adm/produtos');
    })
    .catch(err => {console.log(err)});
});


// DELETE Produto
router.get('/deletar_produto/:id', (req, res) =>{
    const id = req.params.id;
    Produto.destroy({where: {id: id}})
    .then(() =>{
        res.redirect('/adm/produtos');
    })
    .catch(err => {console.log(err)});;
});


module.exports = router