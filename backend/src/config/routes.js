const express =require('express');

module.exports = function(server){
    //api routes
    const router = express.Router();
    server.use('/api', router);

    //TODO routes
    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos');
}
