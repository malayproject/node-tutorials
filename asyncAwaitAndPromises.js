const path = require('path')
const fs = require('fs');
const { reject } = require('lodash');
const { resolve } = require('path');

const getText = filePath => {
    return new Promise((res, rej) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            }else{
                resolve(data)
            }
        })
    })
}

const textData = async () => {
    console.log(typeof path.resolve('dds', 'dfsd'));
    try{
        console.log('inside async try block')
        const firstData = await getText(`${__dirname}/testFolder/content/first.txt`);
        const secondData = await getText(`${__dirname}/testFolder/content/second.txt`);
        console.log(`${firstData}, ${secondData}`);
    }catch(err){
        console.log(err);
    }
}

textData();
console.log('checking where it is placed');
