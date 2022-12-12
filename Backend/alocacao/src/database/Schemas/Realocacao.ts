import mongoose from "mongoose";

const Realocacao = new mongoose.Schema({
    nome: {
        type: String, 
        required: true,
    },
    rg: {
        type: String, 
        required: true,
    },
    dataNascimento: { 
        type: Number, 
        required: true,
    },
    pais: { 
        type: String, 
        required: true,
    },
});

export default mongoose.model("Realocacao", Realocacao);