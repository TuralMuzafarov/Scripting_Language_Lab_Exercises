// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    nums = 1;

    let matrix = Array.from( { length : n }, () => new Array(n).fill(0));

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = nums;
            nums++;
        }
        top += 1;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = nums;
            nums++;
        }
        right -= 1;

        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = nums;
            nums += 1;
        }
        bottom -= 1;

        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = nums;
            nums += 1;
        }
        left += 1;
    }
    return matrix;
}

matrix(3);

module.exports = matrix;
