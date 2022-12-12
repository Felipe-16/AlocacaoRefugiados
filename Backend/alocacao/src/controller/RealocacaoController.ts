import { Request, Response } from "express";
import Realocacao from "../database/Schemas/Realocacao";

class RealocacaoController {
   async find(request:Request, response: Response){
        try {
            const realocacoes = await Realocacao.find();
            return response.json(realocacoes);
        } catch (error) {
            return response.status(500).send({
                error: "Erro em resgatar dados do MongoDB...",
                message: error,
            });
        }
   }
   async create(request:Request, response: Response) {
        const {nome, rg, dataNascimento, pais} = request.body
        try {

            const realocacao = await Realocacao.create({
                nome,
                rg,
                dataNascimento,
                pais
            });

            return response.json(realocacao);
        } catch (error) {
            return response.status(500).send({
                error: "Erro de registro...",
                message: error,
            });
        }
   }
}

export default new RealocacaoController();