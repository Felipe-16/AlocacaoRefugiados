const express = require('express')
const app = express()
app.use(express.json())
const doacao = {}
contador = 0
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