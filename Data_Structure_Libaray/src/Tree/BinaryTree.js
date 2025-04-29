class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertLevelOrder(values) {
        if (!values.length) return null;
        this.root = new Node(values[0]);
        const queue = [this.root];
        let i = 1;
        while (i < values.length) {
            const current = queue.shift();
            if (values[i] != null) {
                current.left = new Node(values[i]);
                queue.push(current.left);
            }
            i++;
            if (i < values.length && values[i] != null) {
                current.right = new Node(values[i]);
                queue.push(current.right);
            }
            i++;
        }
    }

    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
}

module.exports = BinaryTree;
