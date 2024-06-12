const express = require('express');
const router = express.Router();
const Funcionario = require('../models/Funcionario');

// GET Funcionario
router.get("/", (req, res) => {
    Funcionario.findAll({ order: [['id', 'ASC']] })
        .then(funcionarios => {
            res.render('funcionarios', {
                funcionarios
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao buscar os funcionários.");
        });
});

// GET Funcionario by ID - Renderizar Form de Edição
router.get("/editar_funcionario/:id", (req, res) => {
    Funcionario.findOne({ where: { id: req.params.id } })
        .then(funcionario => {
            res.render('editarFuncionario', {
                funcionario
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao buscar o funcionário.");
        });
});

// PUT Funcionario
router.post('/editar', (req, res) => {
    const { id, nome } = req.body;

    Funcionario.update({ id, nome }, { where: { id } })
        .then(() => {
            res.redirect('/adm/funcionarios');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao atualizar o funcionário.");
        });
});

// GET Renderizar Form de Novo Funcionário
router.get('/novoFuncionario', (req, res) => {
    res.render('novoFuncionario');
});

// POST Funcionario
router.post('/novoFuncionario', (req, res) => {
    const { id, nome } = req.body;

    Funcionario.create({ id, nome })
        .then(() => {
            res.redirect('/adm/funcionarios');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao criar o funcionário.");
        });
});

// DELETE Funcionario
router.get('/deletar_funcionario/:id', (req, res) => {
    const id = req.params.id;

    Funcionario.destroy({where: { id: id } })
        .then(() => {
            res.redirect('/adm/funcionarios');
        })
        .catch(err => {
            console.log(err);
        });
});


module.exports = router;
