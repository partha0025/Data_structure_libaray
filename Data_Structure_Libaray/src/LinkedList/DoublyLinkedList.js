class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Insert at the beginning
    insertFirst(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Insert at the end
    insertLast(value) {
        const newNode = new Node(value);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Insert at a given index
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) return this.insertFirst(value);
        if (index === this.size) return this.insertLast(value);

        const newNode = new Node(value);
        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        const previous = current.prev;

        newNode.prev = previous;
        newNode.next = current;
        previous.next = newNode;
        current.prev = newNode;

        this.size++;
    }

    // Remove the first node
    removeFirst() {
        if (!this.head) return null;
        const removed = this.head;

        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.size--;
        return removed.value;
    }

    // Remove the last node
    removeLast() {
        if (!this.tail) return null;
        const removed = this.tail;

        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.size--;
        return removed.value;
    }

    // Remove at index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) return this.removeFirst();
        if (index === this.size - 1) return this.removeLast();

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.size--;

        return current.value;
    }

    // Get index of value
    indexOf(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index++;
        }

        return -1;
    }

    // Check if value exists
    contains(value) {
        return this.indexOf(value) !== -1;
    }

    // Convert to array
    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    // Print list
    print() {
        console.log(this.toArray().join(" <-> ") + " <-> null");
    }

    // Get size
    getSize() {
        return this.size;
    }

    // Clear the list
    clear() {
        this.head = this.tail = null;
        this.size = 0;
    }
}

module.exports = DoublyLinkedList;
