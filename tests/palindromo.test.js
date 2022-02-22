const { palindromo } = require('../utils/testing')

test('palindromo of fabrizio', () => {
    const result = palindromo('fabrizio')
    expect(result).toBe('oizirbaf')
})

test('palindromo of empty', () => {
    const result = palindromo('')
    expect(result).toBe('')
})


test('palindromo of undefined', () => {
    const result = palindromo()
    expect(result).toBe('')
})