const words = require('./words.json');

module.exports = (letters = 4) => {
    if (!words[letters]) {
        throw new Error(
            `random-word-uuid doesn't contain ${letters} letter words`
        );
    }

    return words[letters][Math.floor(Math.random() * words[letters].length)];
};
