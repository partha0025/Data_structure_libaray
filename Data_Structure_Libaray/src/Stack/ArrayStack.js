const Stack = require('./Stack');

class ArrayStack extends Stack {
    constructor() {
        super();
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
        this.size++;
    }

    pop() {
        if (this.isEmpty()) return null;
        this.size--;
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.stack[this.stack.length - 1];
    }

    print() {
        console.log(this.stack.join(" <- "));
    }
}

module.exports = ArrayStack;
