const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get("/oi", function ( req, res) {
  res.send("olá mundo!")

})


const lista = ["rick sanchez", "morty smith", "sumer smith"]

//read all -[GET] /item

app.get("/item", function (req, res) {
  res.send(lista)
})

// read by ID[GET] /item/1:id

app.get("/item/:id", function (req, res) {

// pegamos o ID de rora e subtraimos 1 para ficar
// equivalente ao indice da listaque começa em zero

  const id = req.params.id - 1

//acessamos o item na lista usando o indice corrigido
 const item = lista[id]

 //enviamos o item como resposta

  res.send(item)
  
})

app.listen(3000)

