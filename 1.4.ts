//№4
function reverseSentence(input:string):string {
return input.split(" ").map(valu => valu.split('').reverse().join('')).join(' ')
} 
console.log(reverseSentence("всем кайфа"))