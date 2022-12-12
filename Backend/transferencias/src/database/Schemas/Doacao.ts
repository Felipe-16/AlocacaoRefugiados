import mongoose from "mongoose";

const Doacao = new mongoose.Schema({
    id: {
        type: String, 
        required: true,
    },
    abrigo: {
        type: String, 
        required: true,
    },
    valor: { 
        type: Number, 
        required: true,
    },
    data: { 
        type: Date, 
        required: true,
    },
});

export default mongoose.model("Doacao", Doacao);
