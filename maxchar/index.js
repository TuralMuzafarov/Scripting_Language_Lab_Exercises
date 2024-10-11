// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const map = new Map();
    for (const letter of str) {
        if (map.has(letter)) {
            map.set(letter, map.get(letter) + 1);
        }else map.set(letter, 1);
    }

    let maxValue = 0;
    let maxLetter = '';
    map.entries().forEach(element => {
        if (element[1] > maxValue) {
            maxValue = element[1];
            maxLetter = element[0];
        }
    });

    return maxLetter;
}

module.exports = maxChar;
