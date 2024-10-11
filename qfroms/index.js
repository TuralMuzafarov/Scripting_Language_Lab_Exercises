// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor () {
        this.back = new Stack();
        this.front = new Stack();
    }

    add(value) {
        if (this.front.data.length > 0) {
            while (this.front.data.length > 0) {
                this.back.push(this.front.pop());
            }
        }
        this.back.push(value);
    };

    remove() {        
        if (this.back.data.length > 0) {
            while (this.back.data.length > 0) {
                this.front.push(this.back.pop())
            }
        }
        if (this.front.data.length === 0) return undefined;

        return this.front.pop();
    }

    peek() {
        if (this.back.data.length > 0) {
            while (this.back.data.length > 0) {
                this.front.push(this.back.pop())
            }
        }

        if (this.front.data === 0) return undefined;
        const temp = this.front.pop();
        this.front.push(temp);

        return temp;
    }
}

module.exports = Queue;
