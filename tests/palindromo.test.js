const { palindromo } = require('../utils/testing')

test.skip('palindromo of fabrizio', () => {
    const result = palindromo('fabrizio')
    expect(result).toBe('oizirbaf')
})

test.skip('palindromo of empty', () => {
    const result = palindromo('')
    expect(result).toBe('')
})


test.skip('palindromo of undefined', () => {
    const result = palindromo()
    expect(result).toBe('')
})