const express = require('express');
const server = express(); // server es nuestro servidor. es una instacia de express
const router = require('./routes/index')
const PORT = 3001;
const morgan = require('morgan')

server.use(express.json()); //este middleware pasa la info q me llega en json a un obj de js
server.use(morgan('dev')) //sirve para imprimir en consola las request

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });
 server.use('/rickandmorty',router)


server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
