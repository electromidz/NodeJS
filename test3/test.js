
const EventEmitter = require('events');
const fs = require('fs');

const emitter = new EventEmitter();
const data = 'Hello Omid';
var number = 0;

//############## EMITTERS ################################3

emitter.on('create', () => {
    fs.appendFile('omid.txt', data, function (err){
        if(err) throw err;
    });
    console.log('file created!');
});

emitter.on('rename', () => {
    process.stdout.write('Your number in greater than 10....! \n');
});

emitter.on('unlink', () => {
    fs.unlink('omid.txt', (err) => {
        if(err) throw err;
    });
    console.log('File correctlt deleted!');
});

//#######################################################

process.stdout.write('start \n');
process.stdout.write('let me one numer please from 1 tp 10 ? \n');

process.stdin.on('data' , function(data) {
    process.stdout.write(data);
    switch (data) {
        case 1:
            // emitter('create');
            console.log('you seleceted 1');
            break;
        case 2:
            emitter('rename');
            break;
        case 3:
            emitter('unlink');
            break;
        default:
            console.log('not done!');
            break;
    }
    process.exit();
});

process.on('exit', () => {
    process.stdout.write('Process Done and Exit! \n');
});
