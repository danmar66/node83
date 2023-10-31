const { generateNumber } = require('./generateNumber')

function lottery(expected) {
    const randomNumber = generateNumber()
    if (expected !== randomNumber) {
        return 'You lose'
    }
    return 'You win'
}

module.exports = lottery