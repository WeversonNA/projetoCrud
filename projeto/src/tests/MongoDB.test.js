const Crud = require('../interface/interfaceCrud');
const ContextStrategy = require('../Context/contextStrategy');
const Mongoose = require('mongoose');
const model = require('../Schema/Schemas')
const assert = require('assert');
const connection = require('../Servidor');


const CadastroUsuario = {
    nome: 'leonardo',
    idade: '25'
}
const usuarioFantasma = {}

describe('suite de testes', function(){
    this.beforeAll( async()=>{
    await connection   
    }
    )
    it('usuario criado com sucesso', async ()=>{
        const {nome, idade} = await model.create(CadastroUsuario)
        assert.deepEqual(CadastroUsuario, {nome, idade})
    })
    it('usuario encontrado com sucesso', async ()=>{
        const [{nome, idade}] = await model.find({nome: CadastroUsuario.nome})
        const resultado = {nome, idade}
        assert.deepEqual(resultado, CadastroUsuario)
    })
    it('usuario atualizado com sucesso', async () =>{
        const update = await model.updateOne(usuarioFantasma, {nome: 'rafael', idade: '30'})
    })
    it('usuario deletado com sucesso', async () => {
        const del = await model.findOneAndDelete({_id: '61fd76ef2148939d41023ef4'})
    })
})
    


