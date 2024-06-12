const express = require('express')
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const db = require('./db/connection');


const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use('/public', express.static(__dirname + '/public'));

const port = 9001

app.listen(port, () => {
    console.log(`Servidor online e rodando no link: 'localhost:${port}'!`)
})

db
    .authenticate()
    .then(()=>{
        console.log('Banco conectado');
    })
    .catch(err => {
        console.log('Erro ao conectar', err);
});


app.use('/', require('./routes/navbar'))
app.use('/adm/vendas', require('./routes/vendas'))
app.use('/adm/clientes', require('./routes/clientes'))
app.use('/adm/produtos', require('./routes/produtos'))
app.use('/adm/funcionarios', require('./routes/funcionarios'))
