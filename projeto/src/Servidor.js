const Mongoose = require('mongoose');

Mongoose.connect('mongodb://cliente:1234@localhost:27017/clientes', { useNewUrlParser: true}, function(error){
    if(!error) 
    return;
    console.log('Falha na conexão!', error)


})
const connection = Mongoose.connection

connection.once('open', () => console.log('database rodando!!'))


module.exports = connection