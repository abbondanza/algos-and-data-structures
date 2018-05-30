import BinarySearchTreeNode from './binary-search-tree-node';

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const node = new BinarySearchTreeNode(value);
        if(!this.root) {
            this.root = node;
            return;
        }
        return _insertNode(node, this.root, this.compare);
    }

    contains(value) {
        return _contains(value, this.root, this.compare);
    }

    remove() {}
    min() {
        if(this.isEmpty()) return null;
        return _findLeftMostNode(this.root).value;
    }
    max() {
        if(this.isEmpty()) return null;
        return _findRightMostNode(this.root).value;
    }
    getRoot() {
        return this.root;
    }
    countNodes() {
        return _countNodes(this.root, 0);
    }
    compare(nodeA, nodeB) {
        if(nodeA.value < nodeB.value) {
            return -1;
        }
        if(nodeA.value > nodeB.value) {
            return 1;
        }
        return 0;
    }
    inOrder(node) {
        if(!arguments.length) {
            return this.inOrder(this.root);
        }
        if(!node) {
            return;
        }
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }
    isEmpty() {
        return !this.root;
    }
}

function _findRightMostNode(root) {
    let maxNode = root;
    while(maxNode.right) {
        maxNode = maxNode.right;
    }
    return maxNode;
}

function _findLeftMostNode(root) {
    let minNode = root;
    while(minNode.left) {
        minNode = minNode.left;
    }
    return minNode;
}

function _countNodes(root) {
    if(!root) {
        return 0;
    }
    return _countNodes(root.left) + _countNodes(root.right) + 1;
}

function _insertNode(node, root, compareFn) {
    const toLeft = (compareFn(node, root) < 0);
    if(toLeft && !root.left) {
        root.left = node;
        return;
    }

    if(!toLeft && !root.right) {
        root.right = node;
        return;
    }

    if(toLeft) {
        _insertNode(node, root.left, compareFn);
    } else {
        _insertNode(node, root.right, compareFn);
    }
}

function _contains(value, node, compareFn) {
    if(node === null) {
        return false;
    }
    const compare = compareFn(new BinarySearchTreeNode(value), node);
    if(compare === 0) {
        return true;
    } else if(compare < 0) {
        return _contains(value, node.left, compareFn);
    } else {
        return _contains(value, node.right, compareFn);
    }
}
