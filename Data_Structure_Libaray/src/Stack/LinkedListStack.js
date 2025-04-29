const Stack = require('./Stack');

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack extends Stack {
    constructor() {
        super();
        this.top = null;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) return null;
        const poppedValue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return poppedValue;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.top.value;
    }

    print() {
        let current = this.top;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" <- "));
    }
}

module.exports = LinkedListStack;
