const Mongoose = require('mongoose')
const Crud = require('./interface/interfaceCrud')
const ContextStrategy = require('./Context/contextStrategy');


Mongoose.connect('mongodb://cliente:1234@localhost:27017/clientes', { useNewUrlParser: true}, function(error){
    if(!error) 
    return;
    console.log('Falha na conexão!', error)
})
const connection = Mongoose.connection

connection.once('open', () => console.log('database rodando!!'))

const MudancaDeUsuario = {
    nome: 'michelangelo',
    idade: '30'
}
const CadastroUsuario = {
    nome: 'leonardo',
    idade: '25'
}
const usuarioFantasma = {}

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

async function main(){
    const resultCadastrar = await model.create(CadastroUsuario)

    const listItens = await model.find()
    console.log('clientes', listItens)

    const update = await model.updateOne(usuarioFantasma, {nome: 'rafael', idade: '30'})
    
    const del = await model.deleteOne({_id: '61fd76ef2148939d41023ef4'})
}

main()