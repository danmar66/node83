const greeting = require("./app");

describe('greeting test', ()=>{
    it('should say hello', () => {
        const result = greeting()
        expect(result).toMatchInlineSnapshot(`"Hello?!!!!"`)
    })
})