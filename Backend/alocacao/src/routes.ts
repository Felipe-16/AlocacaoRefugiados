import { Router } from "express";
import RealocacaoController from "./controller/RealocacaoController";
import axios from 'axios';

const routes = Router();

//Rotas para GET e POST de realocação
routes.get("/relocations", RealocacaoController.find);
routes.post("/relocate", RealocacaoController.create);

routes.get('/relocate', (req, res) => {
    res.send(RealocacaoController.find)
})
routes.post('/relocate', async (req, res) => {
    await axios.post("http://localhost:10000/eventos", RealocacaoController.create);
    res.status(201).send(RealocacaoController.create)
})

export default routes;