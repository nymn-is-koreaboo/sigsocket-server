const express = require('express')
const http = require('http').createServer(express);
const io = require('socket.io')(http);
const fs = require('fs');
const chalk = require('chalk');

if(!fs.existsSync('./.logs/')) fs.mkdirSync('./.logs');
global.logpath = './.logs/';

app.get('/', require('./handlers/express/home'));

io.on('connection', function(socket) {
    console.log(chalk.green('Client connected.'));
    socket.on('new', (info) => require('./handlers/sockets/new').exec(info, io, chalk, fs));
    socket.on('scr', (info) => require('./handlers/sockets/scr').exec(info, io, chalk, fs));
    socket.on('ping', (info) => require('./handlers/sockets/ping').exec(info, chalk, fs));
    socket.on('disconnect', () => require('./handlers/sockets/leave').exec(chalk));
});


http.listen(3000, () => console.log(chalk.green('Server running!')));