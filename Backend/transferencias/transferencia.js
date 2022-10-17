const mongoose = require('mongoose');

const TransferenciaSchema = mongoose.Schema({
    doador: { type: String, required: true },
    valor: { type: String, required: true, default: '0' },
    beneficiario: { type: String, required: true },
});
module.exports = mongoose.model('Cliente', TransferenciaSchema);