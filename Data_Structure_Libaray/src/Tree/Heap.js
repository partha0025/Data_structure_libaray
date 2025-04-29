class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx] <= this.heap[idx]) break;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }

    extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return min;
    }

    sinkDown(i) {
        const length = this.heap.length;
        const element = this.heap[i];
        while (true) {
            let leftIdx = 2 * i + 1;
            let rightIdx = 2 * i + 2;
            let smallest = i;

            if (leftIdx < length && this.heap[leftIdx] < this.heap[smallest]) smallest = leftIdx;
            if (rightIdx < length && this.heap[rightIdx] < this.heap[smallest]) smallest = rightIdx;

            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }

    print() {
        console.log(this.heap);
    }
}

module.exports = MinHeap;
