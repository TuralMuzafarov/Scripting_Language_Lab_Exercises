// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let a = 0;
    let b = 1;
    if (n <= 1) {
        return n;
    }

    if (n > 1) {
        a = 0;
        b = 1;
        for(let i = 2; i <=n; i++){
            let temp = a + b;            
            a = b;
            b = temp;
        }
        return b;
    }
}

module.exports = fib;
