const {createReadStream} = require('fs');
const path = require('path');
const http = require('http');

console.log(__dirname)



const server = http.createServer((req, res) => {
    if(req.url === '/text') {
        const fileStream = createReadStream(path.join(__dirname, 'testFolder', 'content', 'bigFile.txt'), {highWaterMark: 300000})
        fileStream.pipe(res);
        fileStream.on('error', err => {
            res.end(err);
        })
    }else if(req.url === '/api/user')   {
        let userData = {
            name: {
                fName: 'First',
                lName: 'Last'
            },
            occupation: 'software engineer',
            age: 29,
            additionalDetails: {
                relativeNames: ['abc', 'def', 'ghi', 'jkl']
            } 
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(userData));
    }else if(req.url === '/contact'){
        const htmlStream = createReadStream(path.join(__dirname, 'testFolder', 'content', 'contact.html'))
        res.writeHead(200, {'Content-Type': 'text/html'});
        htmlStream.pipe(res);
        htmlStream.on('error', err => {
            res.end(err);
        })
    }else if(req.url === '/' || req.url === '/home')   {
        const htmlStream = createReadStream(path.join(__dirname, 'testFolder', 'content', 'index.html'))
        res.writeHead(200, {'Content-Type': 'text/html'});
        htmlStream.pipe(res)
        htmlStream.on('error', err => {
            res.end(err);
        });
    }
    else{
        res.end(`page doesn't exist`);
    }
})

server.listen(5000);



