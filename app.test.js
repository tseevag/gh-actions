const mathFns = require('./math-fn.js')

test('properly adds two numbers', () => {
    expect(sum(2, 3)).toBe(5)
})

test('properly multiplies two numbers', () => expect(mul(2, 3)).toBe(6))

test('properly subtracts two numbers', () => expect(sub(5, 3)).toBe(2))