
const EventEmitter = require('events');
const fs = require('fs');

const myEmitter = new EventEmitter();

myEmitter.on('less', () => {
    fs.appendFile('omid.txt', 'Hello content!', function (err){
        if(err) throw err;
        console.log('file created!');
    });
});

const data = 'Hello Omid';

myEmitter.on('more', () => {
    process.stdout.write('Your number in greater than 10....! \n');
});

myEmitter.on('unlink', () => {
    fs.unlink('omid.txt', (err) => {
        if(err) throw err;
        console.log('File correctlt deleted!');
    })
});
process.stdout.write('start \n');
process.stdout.write('let me one numer please from 1 tp 10 ? \n');
var number = 0;
process.stdin.on('data' , function(data) {
    number = data;
    process.exit();
});
process.on('exit', () => {
    if(number > 10 ){
        myEmitter.emit('more');
    } else if(number < 0 ){
        myEmitter.emit('less');
    } else if(number === 5 ){
        myEmitter.emit('unlink');
    }
});
