const express = require("express");

//add accounts
const accountsRouter = require('./accounts/accounts-router')

const server = express();

server.use(express.json());

//connect accountsRouter
server.use('/api/accounts', accountsRouter)

//fallback code
server.use('*', (req, res)=>{
    res.status(404).json({
        message:'not found',
    })
})

module.exports = server;
