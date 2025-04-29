class Stack {
    constructor() {
        if (this.constructor === Stack) {
            throw new Error("Abstract class cannot be instantiated directly.");
        }
        this.size = 0;
    }

    push(value) {
        throw new Error("push() must be implemented.");
    }

    pop() {
        throw new Error("pop() must be implemented.");
    }

    peek() {
        throw new Error("peek() must be implemented.");
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    clear() {
        this.size = 0;
    }
}

module.exports = Stack;
