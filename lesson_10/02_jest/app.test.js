const sum = require("./app");

describe('sum', () => {
    it('1 + 2 = 3', () => {
        const result = sum(1, 2)
        expect(result).toBe(3)
    })

    test('1 + -2 = -1', () => {
        const result = sum(1, -2)
        expect(result).toBe(-1)
    })

    test.skip('"1" + -2 = -1', () => {
        const result = sum("1", -2)
        expect(result).toBe(-1)
    })

    beforeAll(() => {
        console.log('It runs befoure all tests!')
    })

    afterAll(() => {
        console.log('It runs after all tests!')
    })

    beforeEach(() => {
        console.log('It runs before each test!')
    })
})