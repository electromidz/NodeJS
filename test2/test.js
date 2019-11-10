function grab (flag){
    var index = process.argv.indexOf(flag);
    return (flag === -1) ? null : process.argv[index++];
}
var greeting = grab('--greeting');
var user     = grab('--user');
if (!user || !greeting) {
    console.log("No user No greeting!");    
} else {
  console.log(`khsoh omadi ${user}, ${greeting}`);  
};