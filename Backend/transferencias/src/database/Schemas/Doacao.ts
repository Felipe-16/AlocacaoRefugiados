import mongoose from "mongoose";

const Doacao = new mongoose.Schema({
    doador: {
        type: String, 
        required: true,
    },
    rg: {
        type: String, 
        required: true,
    },
    valor: { 
        type: Number, 
        required: true,
    },
    beneficiario: { 
        type: String, 
        required: true,
    },
});

export default mongoose.model("Doacao", Doacao);