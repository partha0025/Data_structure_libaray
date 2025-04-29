class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.front = this.rear = null;
    }

    enqueue(value) {
        const node = new Node(value);
        if (!this.rear) this.front = this.rear = node;
        else {
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue() {
        if (!this.front) return null;
        const value = this.front.value;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        return value;
    }

    peek() {
        return this.front ? this.front.value : null;
    }

    isEmpty() {
        return !this.front;
    }

    print() {
        let cur = this.front;
        const result = [];
        while (cur) {
            result.push(cur.value);
            cur = cur.next;
        }
        console.log(result.join(" -> "));
    }
}

module.exports = LinkedListQueue;
