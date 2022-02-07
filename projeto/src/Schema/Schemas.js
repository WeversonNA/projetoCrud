const Mongoose = require('mongoose')

const clienteSchema = new Mongoose.Schema({
    nome: {
        type:String,
        required: true
    },
    idade:{
        type:String,
        required: true
    },
    insertedAt:{
        type: Date,
        default: new Date()
    }
})
const model = Mongoose.model('clientes', clienteSchema)

module.exports = model