const Crud = require('../interface/interfaceCrud')
const model = require('../Schema/Schemas')
const connection = require('../Servidor')

const _database = []
class ContextStrategy extends Crud{
    constructor(){
        super()
    }
    
    connect(){
        return this._database.connect();
    }
    isConnected(){
        return this._database.isConnected();
    }
    create(item){
        return this._database.create(item);
    }
    read(id, item){
        return this._database.read(id, item);
    }
    update(id, item){
        return this._database.update(id, item);
    }
    delete(id){
        return this._database.delete(id);
    }

}
module.exports = ContextStrategy