var prompt = require('prompt-sync')({sigint: true})

var mathFns = require('./math-fn')

const n1 = Number(prompt('Enter N1: '))
const n2 = Number(prompt('Enter N2: '))
''
console.log(`Sum: ${mathFns.sum(n1, n2)}`)
console.log(`Difference: ${mathFns.sub(n1, n2)}`)
console.log(`Multiplication: ${mathFns.mul(n1, n2)}`)
