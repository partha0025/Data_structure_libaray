class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyCircularLinkedList {
    
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
            newNode.next = newNode.prev = newNode;
        } else {
            newNode.next = this.head;
            newNode.prev = this.tail;
            this.head.prev = newNode;
            this.tail.next = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Insert at the end
    insertLast(value) {
        const newNode = new Node(value);
        if (!this.tail) {
            this.insertFirst(value);
        } else {
            newNode.prev = this.tail;
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head.prev = newNode;
            this.tail = newNode;
            this.size++;
        }
    }

    // Insert at a given index
    insertAt(value, index) {
        if (index < 0 || index > this.size) throw new Error("Index out of bounds");
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
        newNode.next = current;
        newNode.prev = previous;
        previous.next = newNode;
        current.prev = newNode;
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
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }

        this.size--;
        return removed.value;
    }

    // Remove the last node
    removeLast() {
        if (!this.tail) return null;

        const removed = this.tail;
        if (this.size === 1) {
            return this.removeFirst();
        }

        this.tail = this.tail.prev;
        this.tail.next = this.head;
        this.head.prev = this.tail;
        this.size--;
        return removed.value;
    }

    // Remove at index
    removeAt(index) {
        if (index < 0 || index >= this.size) throw new Error("Index out of bounds");
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

    // Find index of a value
    indexOf(value) {
        let current = this.head;
        let index = 0;

        if (!current) return -1;

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
        let current = this.head;

        if (!current) return result;

        do {
            result.push(current.value);
            current = current.next;
        } while (current !== this.head);

        return result;
    }

    // Print list
    print() {
        console.log(this.toArray().join(" <-> ") + " <-> (back to head)");
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

module.exports = DoublyCircularLinkedList;
