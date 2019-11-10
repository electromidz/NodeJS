var question = [
    "What`s your name?",
    "What`s your favorite hobby?",
    "What`s your preferred programmnig language?"
];
var answers = [];

function ask(i) {
    process.stdout.write(`\n\n ${question[i]}`);
    process.stdout.write("  >  ");  
}
process.stdin.on('data' , function (data) {
    // process.stdout.write('\n' + data.toString().trim() + '\n');   
    answers.push(data.toString().trim());
    if (answers.length < question.length) {
        ask(answers.length);        
    } else {
        process.exit();        
    }
});

process.on('exit' , function () {
    process.stdout.write('\n\n');
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can learning ${answers[2]} later`);
    process.stdout.write('\n\n');
    
})

ask(0);