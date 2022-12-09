import { Request, Response } from "express";
import Doacao from "../database/Schemas/Doacao";

class DoacaoController {
   async find(request:Request, response: Response){
        try {
            const doacoes = await Doacao.find();
            return response.json(doacoes);
        } catch (error) {
            return response.status(500).send({
                error: "Erro em resgatar dados do MongoDB...",
                message: error,
            });
        }
   }
   async create(request:Request, response: Response) {
        const {doador, rg, valor, beneficiario} = request.body
        try {

            const doacao = await Doacao.create({
                doador,
                rg,
                valor,
                beneficiario
            });

            return response.json(doacao);
        } catch (error) {
            return response.status(500).send({
                error: "Erro de registro...",
                message: error,
            });
        }
   }
}

export default new DoacaoController();