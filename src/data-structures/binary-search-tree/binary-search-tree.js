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
        return _remove(new BinarySearchTreeNode(value), this.root, this.compare);
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
    bsf(node) {
        if(!arguments.length) {
            return this.bsf(this.root);
        }
        let ret = [];
        let q = [node];
        while(q.length) {
            let curr = q.shift();
            ret.push(curr.value);
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
        }

        return ret.join(' ');
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

function _remove(targetNode, root, compareFn) {
    if(root === null) {
        return null;
    }

    const compare = compareFn(targetNode, root);
    // recurse until we return any node
    // the node that is ultimately returned replaces
    // old node.

    // target < root, so targetNode is in left subtree
    if(compare < 0) {
        root.left = _remove(targetNode, root.left, compareFn);
    // target > root, so targetNode is in right subtree
    } else if (compare > 0) {
        root.right = _remove(targetNode, root.right, compareFn);
    // current root IS node to delete
    } else {
        console.log(' delete me ! ', root.value);
        // case 1: no children
        // return null root, so parent sets one of its children to null
        if(!root.left && !root.right) {
            return null;
        }
        // case 2: one child
        if(!root.right) {
            return root.left;
        }

        if(!root.left) {
            return root.right;
        }
        // case 3: two children
        // dupe node?
        console.log('root', root);
        root.value = _findLeftMostNode(root.right).value;
        console.log('root', root);
        root.right = _remove(root, root.right, compareFn);
    }
    return root;
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
