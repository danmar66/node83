const sum = require("./app");

// const result = sum(1, 2)

// if (result !== 3) {
//     throw new Error(`Expect 3, got ${result}`)
// } else {
//     console.log('Test Passed')
// }

// const result2 = sum(1, -2)

// if (result2 !== -1) {
//     throw new Error(`Expect -1, got ${result2}`)
// } else {
//     console.log('Test Passed')
// }

// const result3 = sum("1", -2)

// if (result3 !== -1) {
//     throw new Error(`Expect -1, got ${result3}`)
// } else {
//     console.log('Test Passed')
// }

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Expect ${expected}, got ${actual}`);
            }
            console.log("       Test Passed");
        },
    };
}

function describe(text, cb) {
    console.log(`${text}`);
    cb();
}

function test(text, cb) {
    console.log(`   ${text}`);
    cb();
}

describe('sum', () => {
    test('1 + 2 = 3', () => {
        const result = sum(1, 2)
        expect(result).toBe(3)
    })

    test('1 + -2 = -1', () => {
        const result = sum(1, -2)
        expect(result).toBe(-1)
    })

    test('"1" + -2 = -1', () => {
        const result = sum("1", -2)
        expect(result).toBe(-1)
    })
})