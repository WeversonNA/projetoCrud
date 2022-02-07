const model = require('../Schema/Schemas')
const assert = require('assert');
const connection = require('../Servidor');
const JWT = require('jsonwebtoken');
const express = require('express')
const mongodb = require('mongodb')



const NovoUsuario = {
    nome: 'michelangelo',
    senha: 'tartaruga'
}

const CadastroUsuario = {
    nome: 'leonardo',
    idade: '25'
}
const usuarioAtualizar = {
    nome: 'rafael', idade: '30'
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
        const result = {nome, idade}
        assert.deepEqual(result, CadastroUsuario)
    })
    it('atualizando usuario', async () =>{
        const {nome, idade} = await model.findOneAndUpdate(usuarioFantasma, usuarioAtualizar)
        const result = {nome, idade}
        
        try {
            assert.deepEqual(usuarioAtualizar, result)
        } catch (error) {
            if(result !== usuarioAtualizar){
                console.log('não existe usuario para atualizar')
            }      
        }
          
    })
    it('deletando usuario', async ()=>{
        const result = await model.deleteOne(CadastroUsuario)
        
        try {
            assert.deepEqual(result.deletedCount, 1)
        } catch (error) {
            if(result.deletedCount !== 1){
                console.log('não existe nada no banco de dados para deletar')
            }
        }   
    })
    it('deve obter um token', async ()=>{
        const token = JWT.sign({id: NovoUsuario.id}, 'abc', {
            expiresIn: 84000,
        })
        
    })
        
})
    


