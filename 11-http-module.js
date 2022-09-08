const HTTP = require('http');
const _ = require('lodash');

const server = HTTP.createServer((req, res) => {
    if(req.url === '/' || req.url === '/home') {
        res.write(`<p>Welcome! I got a request, here is my response.</p>`);
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

server.listen(5011, () => {
    console.log('server listning at port: ', 5011)
});

const arr = [1, [2, [3, [4]]]];

const flattenedArr = _.flattenDeep(arr)
console.log(flattenedArr);