// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const colSize = 2 * n - 1;
    let matrix = Array.from( { length: n }, () => new Array(colSize).fill(' '));
    let middleIndex = n - 1;
    for (let i = 0; i <= matrix.length - 1; i++) {
        for  (let k = middleIndex - i; k <= middleIndex + i; k++) {
            matrix[i][k] = '#';
        }
    }

    for (let row of matrix) {
        console.log(row.join(''));
    }
}

module.exports = pyramid;
