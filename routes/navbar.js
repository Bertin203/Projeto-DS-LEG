const express = require('express')
const router = express.Router()

router.get("/home", (req, res) => {
    res.render('home')
})

router.get("/sobre", (req, res) =>{
    res.render('sobre')
})

router.get("/fotos", (req, res)=>{
    res.render('fotos')
})

router.get("/contato", (req, res)=>{
    res.render('contato')
})

router.get("/adm", (req, res) => {
    res.render('adm')
})

module.exports = router 