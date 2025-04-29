class DoubleEndedQueue {
    constructor() {
        this.items = [];
    }

    addFront(value) {
        this.items.unshift(value);
    }

    addRear(value) {
        this.items.push(value);
    }

    removeFront() {
        return this.items.shift();
    }

    removeRear() {
        return this.items.pop();
    }

    peekFront() {
        return this.items[0];
    }

    peekRear() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items.join(" <-> "));
    }
}

module.exports = DoubleEndedQueue;
