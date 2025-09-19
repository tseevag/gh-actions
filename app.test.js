const {sum, mul} = require('./app.js')

test('properly adds two numbers', () => {
    expect(sum(2,3)).toBe(5)
})

test('properly multiplies two numbers', () => expect(mul(2,3)).toBe(6))