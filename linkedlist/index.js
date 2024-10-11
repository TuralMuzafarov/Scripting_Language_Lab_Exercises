// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document
class Node {
    constructor(data, next = null) { 
        this.data = data;
        this.next = next; 
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    insertFirst(data) {
        let temp = this.head;
        this.head = new Node(data); 
        this.head.next = temp; 
    }

    size() {
        let count = 0;
        let lastNode = this.head;
        while (lastNode) {
            count++;
            lastNode = lastNode.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    insertLast(data) {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        } else {
            this.head = new Node(data); 
            return;
        }
        lastNode.next = new Node(data); 
    }

    get(index) {
        let chosenNode = this.head;
        if (chosenNode) {
            for (let i = 0; i < index; i++) {
                chosenNode = chosenNode.next;
                if (!chosenNode) {
                    return null; 
                }
            }
        }
        return chosenNode ? chosenNode.data : null;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return; 
        let prevNode = this.head;
        let lastNode = this.head.next;

        if (!lastNode) {
            this.head = null; 
            return;
        }

        while (lastNode.next) {
            prevNode = lastNode;
            lastNode = lastNode.next;
        }
        prevNode.next = null;
    }

    getAt(index) {
        let counter = 0;
        let lastNode = this.head;

        while (lastNode) {
            if (counter === index) {
                return lastNode;
            }
            counter++;
            lastNode = lastNode.next;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const prevNode = this.getAt(index - 1);
        if (!prevNode || !prevNode.next) {
            return;
        }

        prevNode.next = prevNode.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const prevNode = this.getAt(index - 1) || this.getLast();
        const newNode = new Node(data);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
    }

    forEach(fn) {
        let lastNode = this.head;
        let index = 0;
        while (lastNode) {
            fn(lastNode, index);
            lastNode = lastNode.next;
            index++;
        }
    }

    *[Symbol.iterator]() {
        let lastNode = this.head;
        while (lastNode) {
            yield lastNode;
            lastNode = lastNode.next;
        }
    }
}

module.exports = { Node, LinkedList };