const lottery = require("./app");

const mockGenerateNumber = jest.fn()

jest.mock('./generateNumber', () => {
    return {
        generateNumber: () => mockGenerateNumber(),
    }
})

describe('lottery', () => { 

    beforeAll(()=> {
        mockGenerateNumber.mockImplementation(() => 1)
    })
    
    it('should win', () => {
        const result = lottery(1)
        expect(result).toBe('You win')
    })

    it.skip('should lose', () => {
        const result = lottery(2)
        expect(result).toBe('You lose')
    })
 })