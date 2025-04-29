class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(value, priority) {
        const node = { value, priority };
        let added = false;
        for (let i = 0; i < this.queue.length; i++) {
            if (priority < this.queue[i].priority) {
                this.queue.splice(i, 0, node);
                added = true;
                break;
            }
        }
        if (!added) this.queue.push(node);
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        console.log(this.queue.map(n => `${n.value}(${n.priority})`).join(" -> "));
    }
}

module.exports = PriorityQueue;
