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
        return !!_find(new BinarySearchTreeNode(value), this.root, this.compare);
    }
    // key
    remove(value) {
        const targetNode = new BinarySearchTreeNode(value);
        const parent = _findParent(targetNode, this.root, this.compare);
        // There either is no parent (root) or node is not found
        if(!parent) {
            return;
        }

        let direction = 'right';
        if(this.compare(targetNode, parent.left) < 0) {
            direction = 'left';
        }
        let nodeToDelete = parent[direction];
        let subValue = _findLeftMostNode(nodeToDelete.right).value;
        console.log('removing', value);
        console.log('substitute', subValue);
        //this.remove(subValue); // is a leaf node
        parent[direction] = new BinarySearchTreeNode(subValue);
        parent[direction].left = nodeToDelete.left;
        parent[direction].right = nodeToDelete.right;
    }
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
    while(maxNode && maxNode.right) {
        maxNode = maxNode.right;
    }
    return maxNode;
}

function _findLeftMostNode(root) {
    let minNode = root;
    while(minNode && minNode.left) {
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

function _find(targetNode, node, compareFn) {
    if(node === null) {
        return null;
    }
    const compare = compareFn(targetNode, node);
    if(compare === 0) {
        return node;
    } else if(compare < 0) {
        return _find(targetNode, node.left, compareFn);
    } else {
        return _find(targetNode, node.right, compareFn);
    }
}

function _findParent(targetNode, node, compareFn) {
    // This can only happen when tree is empty
    if(node === null) {
        return null;
    }

    const compare = compareFn(targetNode, node);
    // this means that targetNode is root..
    if(!compare) {
        return null;
    }
    // targetNode is non-existent
    if(compare < 0 && !node.left) {
        return null;
    }
    // targetNode is non-existent
    if(compare > 0 && !node.right) {
        return null;
    }

    // This is the base case for the recursion. We found it!
    if(!compareFn(targetNode, node.left) || !compareFn(targetNode, node.right)) {
        return node;
    }

    // If parent is to the left
    if(compare < 0) {
        return _findParent(targetNode, node.left, compareFn);
    }
    // If parent is to the right
    return _findParent(targetNode, node.right, compareFn);
}
