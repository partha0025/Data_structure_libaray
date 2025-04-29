class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
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
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Insert at the end
    insertLast(value) {
        const newNode = new Node(value);
        if (!this.tail) {
            this.head = this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Insert at specific index
    insertAt(value, index) {
        if (index < 0 || index > this.size) throw new Error("Index out of bounds");
        if (index === 0) return this.insertFirst(value);
        if (index === this.size) return this.insertLast(value);

        const newNode = new Node(value);
        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }

    // Remove the first node
    removeFirst() {
        if (!this.head) return null;

        const removed = this.head;
        if (this.size === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.tail.next = this.head;
        }

        this.size--;
        return removed.value;
    }

    // Remove the last node
    removeLast() {
        if (!this.head) return null;

        const removed = this.tail;
        if (this.size === 1) {
            this.head = this.tail = null;
        } else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            current.next = this.head;
            this.tail = current;
        }

        this.size--;
        return removed.value;
    }

    // Remove at index
    removeAt(index) {
        if (index < 0 || index >= this.size) throw new Error("Index out of bounds");
        if (index === 0) return this.removeFirst();
        if (index === this.size - 1) return this.removeLast();

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = current.next;
        this.size--;
        return current.value;
    }

    // Find index of value
    indexOf(value) {
        if (!this.head) return -1;
        let current = this.head;
        let index = 0;

        do {
            if (current.value === value) return index;
            current = current.next;
            index++;
        } while (current !== this.head);

        return -1;
    }

    // Check if value exists
    contains(value) {
        return this.indexOf(value) !== -1;
    }

    // Convert to array
    toArray() {
        const result = [];
        if (!this.head) return result;

        let current = this.head;
        do {
            result.push(current.value);
            current = current.next;
        } while (current !== this.head);

        return result;
    }

    // Print the list
    print() {
        console.log(this.toArray().join(" -> ") + " -> (back to head)");
    }

    // Get list size
    getSize() {
        return this.size;
    }

    // Clear the list
    clear() {
        this.head = this.tail = null;
        this.size = 0;
    }
}

module.exports = CircularLinkedList;
