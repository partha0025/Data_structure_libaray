class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) return (this.root = newNode);

        let cur = this.root;
        while (true) {
            if (value < cur.value) {
                if (!cur.left) return (cur.left = newNode);
                cur = cur.left;
            } else {
                if (!cur.right) return (cur.right = newNode);
                cur = cur.right;
            }
        }
    }

    search(value) {
        let cur = this.root;
        while (cur) {
            if (value === cur.value) return true;
            cur = value < cur.value ? cur.left : cur.right;
        }
        return false;
    }

    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
}

module.exports = BinarySearchTree;
