const bodyParser = require('body-parser')
const express = require('express')
const app = express()



//Middleware para servir arquivos estacos
app.use(express .static(__dirname))

//Body-parcer para ler dados de fomularios 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Inicializando servidor

const PORT = 8080
app.listen(PORT,() =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})