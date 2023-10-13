const pi = 3.14
const readline = require("readline");
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.question("Yarıçap giriniz :",(input_r) =>{
    input_r = parseFloat(input_r)

let result = pi * (input_r **2);
console.log(`Yarıçapı ${input_r} olan dairenin alanı: ${result}.`);
r.close()
})
