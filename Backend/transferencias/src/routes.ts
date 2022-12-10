import { Router } from "express";
import DoacaoController from "./controller/DoacaoController";
import RealocacaoController from "./controller/RealocacaoController";

const routes = Router();

//Rotas para GET e POST de doação
routes.get("/donations", DoacaoController.find);
routes.post("/donate", DoacaoController.create);

//Rotas para GET e POST de realocação
routes.get("/relocations", RealocacaoController.find);
routes.post("/relocate", RealocacaoController.create);

export default routes;