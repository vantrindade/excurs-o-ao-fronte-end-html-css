// express
const express = require('express')
const app = express()

// banco de dados
//const bancoDeDados = require('bancoDeDados')

// bordy-parser ler/aceita formato html e json
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json()) 

// arquivo estatico como css
app.use(express.static('public')); 

// rota
app.get('/focoPomodoro', (req, res) => {
    res.sendFile(__dirname +'/public/focoPomodoro.html')
})

app.listen(3003,() =>{(console.log('servido on'))})