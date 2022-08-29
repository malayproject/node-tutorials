const HTTP = require('http');

const server = HTTP.createServer((req, res) => {
    if(req.url === '/') {
        res.write(`<p>I got a request, here is my response.</p>`);
    }else if(req.url === '/about')  {
        res.write('This is our history.')
    }else{
        res.write(`
        <h1>Oops! seems like we can't find the resource you are looking for</h1>
        <p>To go back to the homepage click</p>
        <a href='/'>Home</a>
        `)
    }
    res.end();
});

server.listen(5011);