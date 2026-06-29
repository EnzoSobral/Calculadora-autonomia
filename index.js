// Importa a framework Express
const express = require('express')

// Cria uma instância do Express
const app = express()

// Define a porta onde o servidor será executado
const port = 3000

// Configura o EJS como motor de template
app.set('view engine', 'ejs')

// Configura a pasta public
app.use(express.static('public'))

// Permite receber dados do formulário (POST)
app.use(express.urlencoded({ extended: true }))

// Rota GET / - Exibe o formulário
app.get('/', (req, res) => {
    res.render('index', { resultado: null, consumo: '', energia: '' })
})

// Rota POST / - Recebe os dados e calcula a distância
app.post('/', (req, res) => {
    const consumo = parseFloat(req.body.consumo)
    const energia = parseFloat(req.body.energia)

    const distancia = consumo * energia

    res.render('index', { resultado: distancia, consumo, energia })
})

// Faz o servidor "escutar" as requisições da porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`)
})
