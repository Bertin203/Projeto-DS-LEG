const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');

// GET Todos os clientes
router.get("/", (req, res) => {
    Cliente.findAll({ order: [['id', 'ASC']] })
        .then(clientes => {
            res.render('clientes', { clientes });
        })
        .catch(err => {
            console.log(err);
        });
});

// GET Cliente por ID - Renderizar Form de Edição
router.get("/editar_cliente/:id", (req, res) => {
    Cliente.findByPk(req.params.id)
        .then(cliente => {
            res.render('editarCliente', { cliente });
        })
        .catch(err => {
            console.log(err);
        });
});

// GET Renderizar Form de Novo Cliente
router.get('/novoCliente', (req, res) => {
    res.render('novoCliente');
});

// POST Criar Cliente
router.post('/novoCliente', (req, res) => {
    const { id, nome, cpf, email } = req.body;

    Cliente.create({ id, nome, cpf, email })
        .then(() => {
            res.redirect('/adm/clientes');
        })
        .catch(err => {
            console.log(err);
        });
});

// POST Atualizar Cliente
router.post('/editar', (req, res) => {
    const { id, nome, cpf, email } = req.body;

    Cliente.update({ id, nome, cpf, email }, { where: { id } })
        .then(() => {
            res.redirect('/adm/clientes');
        })
        .catch(err => {
            console.log(err);
        });
});

// GET Excluir Cliente
router.get('/deletar_cliente/:id', (req, res) => {
    const id = req.params.id;

    Cliente.destroy({ where: { id: id } })
        .then(() => {
            res.redirect('/adm/clientes');
        })
        .catch(err => {
            console.log(err);   
        });
});

module.exports = router;
