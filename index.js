const express = require('express')
const app = express()

// registrar um middleware
// indica que todos as requisicoes podem receber
//body em json. a partir diddo o express aplica
// um json. parse para o conteudo recebido

app.use(express.json())

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

 //enviamos o item como resposta do endpoint

  res.send(item)
  
})

// create - [post] /item
app.post("/item", function (req, res) {
  // extraimos o nome do body da requisição
 const item= req.body.nome
 lista.push(item)

 // exibimos uma mensagem de sucesso
 res.send("item adicionado com sucesso!")
})

//update - [put] /item/:id
app.put("/item/:id", function (req, res) {
  const id = req.params.id -1
  const novoItem = req.body.nome
  lista[id] = novoItem
  res.send("item atualizado com sucesso!")
})
app.delete("/item/:id", function (req, res) {
 const id = req.params.id -1
// remove item da lista
 delete lista [id]
  res.send("item removido com sucesso!")
})
app.listen(3000)

