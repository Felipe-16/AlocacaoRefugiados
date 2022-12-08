import { Router } from "express";
import DoacaoController from "./controller/DoacaoController";

//Rotas para GET e POST
const routes = Router();
routes.get("/donations", DoacaoController.find);
routes.post("/donate", DoacaoController.create);

export default routes;