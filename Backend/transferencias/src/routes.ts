import { Router } from "express";
import DoacaoController from "./controller/DoacaoController";
import axios from 'axios';

const routes = Router();

//Rotas para GET e POST de doação
routes.get('/donate', (req, res) => {
    res.send(DoacaoController.find)
})
routes.post('/donate', async (req, res) => {
    await axios.post("http://localhost:10000/eventos", DoacaoController.create);
    res.status(201).send(DoacaoController.create)
})

export default routes;