class notImplementedException extends Error{
    constructor(){
        super('notImplementedException')
    }
}

class Crud{
    connect(){
        throw new notImplementedException();
    }
    isConnected(){
        throw new notImplementedException();
    }
    create(item){
        throw new notImplementedException(item);
    }
    read(id, item){
        throw new notImplementedException(id, item);
    }
    update(id, item){
        throw new notImplementedException(id, item);
    }
    delete(id){
        throw new notImplementedException(id);
    }

}
module.exports = Crud