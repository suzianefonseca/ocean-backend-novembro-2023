const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get("/oi", function ( req, res){
  res.send("olá mundo!")

})

const lista = ["rick sanchez", "morty smith", "sumer smith"]

app.get("/item", function (req, res) {
  res.send(lista)
})


app.listen(3000)

