const {sum, mul, sub} = require('./math-fn.js')

// test('properly adds two numbers', () => {
//     expect(sum(2, 3)).toBe(5)
// })

// test('properly multiplies two numbers', () => expect(mul(2, 3)).toBe(6))

// test('properly subtracts two numbers', () => expect(sub(5, 3)).toBe(2))

describe('Sum function', () => {
    test.each([
        [1, 2, 3],
        [4, -5, -1],
        [-4, -9, -13],
        [0, 1, 1]
    ])('add(%i, %i) should return %i', (a, b, expected) => {
        expect(sum(a, b)).toBe(expected)
    })
})

describe('Substract function', () => {
    test.each([
        [1, 2, -1],
        [4, -5, 9],
        [-4, -9, 5],
        [0, 1, -1]
    ])('sub(%i, %i) = %i', (a, b, expected) => {
        expect(sub(a, b)).toBe(expected)
    })
})

describe('Multiply funtion', () => {
    test.each([
        [1, 2, 2],
        [4, -5, -20],
        [-4, -9, 36],
        [0, 1, 0]
    ])('mul(%i, %i) = %i', (a, b, expected) => {
        expect(mul(a, b)).toBe(expected)
    })
})