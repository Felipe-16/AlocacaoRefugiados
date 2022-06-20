const express = require('express')
const app = express()
app.use(express.json())
const doacao = {}
contador = 0
const mongoose = require ('mongoose')




//DB Connection
mongoose.connect(`mongodb+srv://ecm-252-semestre1:12345@forget.d3691lf.mongodb.net/Projeto-ecm252?retryWrites=true&w=majority`)
.then(() => {
  console.log("Conexão OK")
})
.catch((e) => {
  console.log("Conexão NOK: " + e)
})



//GET
app.get('/doacao', (req, res) => {
    res.send(doacao)
})

//POST
app.post('/doacao', (req, res) => {
    contador++
    const { doador } = req.body
    const { valor } = req.body
    const { beneficiario } = req.body
    doacao[contador] = {doador, valor, beneficiario}
    console.log(doador)
    console.log(valor)
    console.log(beneficiario)
    res.status(201).send(doacao[contador])
})



app.listen(4000, () => {
    console.log("Lembretes. Porta 4000.")
})