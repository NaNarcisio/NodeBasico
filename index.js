const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createserver((req,res) => {
    res.statuscode = 200;
    res.setHeader('content-typer', 'text/plain');
    res.end('Olá do Narcisio');
});

server.listen(port,hostname, () => {
    console.log("servidor rodando!");
})