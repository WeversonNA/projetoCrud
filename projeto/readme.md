projeto crud funcional com banco de dados MongoDB

primeiro fazer o create, criar um usuario

## MONGODB

docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=senha -d  mongo:4

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

docker exec -it mongodb mongo --host localhost -u admin -p senha --authenticationDatabase admin --eval "db.getSiblingDB('clientes').createUser({user: 'cliente', pwd: '1234', roles: [{role: 'readWrite', db: 'clientes'}]})" 