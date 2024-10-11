// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');

const { LinkedList } = require("./linkedlist");

//    fromLast(list, 2).data // 'b'
function fromLast(list, n) {
        let forward = list.head;
        let backward = list.head;

        for (let i = 0; i < n; i++) {
            forward = forward.next;
        };

        while (forward.next) {
            backward = backward.next;
            forward = forward.next;
        }
        return backward; 
}

// const list = new LinkedList();
// list.insertLast('a');
// list.insertLast('b');
// list.insertLast('c');
// list.insertLast('d');

// console.log(fromLast(list, 2).data);


module.exports = fromLast;
