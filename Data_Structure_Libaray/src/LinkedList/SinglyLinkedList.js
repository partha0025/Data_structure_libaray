class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert at the beginning
    insertFirst(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Insert at the end
    insertLast(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Insert at a specific position
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }
        if (index === 0) return this.insertFirst(value);

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

    // Remove first node
    removeFirst() {
        if (!this.head) return null;
        const removed = this.head;
        this.head = this.head.next;
        this.size--;
        return removed.value;
    }

    // Remove last node
    removeLast() {
        if (!this.head) return null;
        if (!this.head.next) {
            const removed = this.head;
            this.head = null;
            this.size--;
            return removed.value;
        }

        let current = this.head;
        let previous;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
        this.size--;
        return current.value;
    }

    // Remove at specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        if (index === 0) return this.removeFirst();

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

    // Search for a value
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

    // Convert list to array
    toArray() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    // Print list
    print() {
        console.log(this.toArray().join(" -> ") + " -> null");
    }

    // Get length
    getSize() {
        return this.size;
    }

    // Clear the list
    clear() {
        this.head = null;
        this.size = 0;
    }
}

// Export the class for library use
module.exports = SinglyLinkedList;
