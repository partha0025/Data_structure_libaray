class CircularQueue {
    constructor(capacity) {
        this.queue = new Array(capacity);
        this.capacity = capacity;
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }

    enqueue(value) {
        if (this.isFull()) return false;
        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.capacity;
        this.size++;
        return true;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const value = this.queue[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return value;
    }

    peek() {
        return this.isEmpty() ? null : this.queue[this.front];
    }

    isFull() {
        return this.size === this.capacity;
    }

    isEmpty() {
        return this.size === 0;
    }

    print() {
        const result = [];
        for (let i = 0; i < this.size; i++) {
            result.push(this.queue[(this.front + i) % this.capacity]);
        }
        console.log(result.join(" -> "));
    }
}

module.exports = CircularQueue;
