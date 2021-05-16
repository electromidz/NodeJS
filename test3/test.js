process.stdout.write('start \n');
process.stdout.write('let me one numer please from 1 tp 10 ? \n');
var number = 0;
process.stdin.on('data' , function(data) {
    number = data;
    process.exit();
});
process.on('exit', () => {
    if(number > 10 ){
        process.stdout.write('Your number in greater than 10.... \n');
    }
})

