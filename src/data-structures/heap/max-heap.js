const _swimUp = (index, arr, comparator) => {
    // There is no more swimming up
    if(index === 1) {
        return;
    }
    let pIndex = _parentIndex(index, arr);
    let node = arr[index];
    let parent = arr[pIndex];

    // if node > parent or node should be above parent
    if(comparator(node, parent) > 0) {
        _swap(index, pIndex, arr);
        _swimUp(pIndex, arr, comparator);

    // It is where it belongs
    } else {
        return;
    }
}

const _sinkDown = (index, arr, comparator) => {
    let left = _leftIndex(index, arr);
    let right = _rightIndex(index, arr);
    let node = arr[index];

    // node has no children
    if(left >= arr.length) {
        return;
    // node has only left child
    } else if (right >= arr.length) {
        if(comparator(node, arr[left]) <= 0) {
            _swap(left, index, arr);
            _sinkDown(left, arr, comparator);
        }
    // node has both children
    } else {
        let nextIndex = left;
        if(comparator(arr[left], arr[right]) < 0) {
            nextIndex = right;
        }

        if(comparator(node, arr[nextIndex]) <= 0) {
            _swap(nextIndex, index, arr);
            _sinkDown(nextIndex, arr, comparator);
        }
    }
}

const _swap = (idxA, idxB, arr) => {
    const temp = arr[idxA];
    arr[idxA] = arr[idxB];
    arr[idxB] = temp;
}

const _parentIndex = (idx, arr) => {
    return Math.floor(idx/2);
}

const _leftIndex = (idx, arr) => {
    return 2*idx;
}

const _rightIndex = (idx, arr) => {
    return (2*idx) + 1;
}

const _itemIndexes = (item, heapArray, comparator) => {
    let idxs = [];
    for(let i=1; i<heapArray.length; i++) {
        if(!comparator(item, heapArray[i])) {
            idxs.push(i);
        }
    }

    return idxs;
}
export default class MaxHeap {
    constructor(comparator) {
        this.heapArray = [null];
        this.comparator = comparator;
    }

    top() {
        return this.isEmpty() ? null : this.heapArray[1];
    }

    insert(item) {
        this.heapArray.push(item);
        _swimUp(this.heapArray.length - 1, this.heapArray, this.comparator);
    }

    extractTop() {
        if(this.isEmpty()) {
            return null;
        }


        if(this.size() === 1) {
            return this.heapArray.pop();
        }

        const oldTop = this.top();
        this.heapArray[1] = this.heapArray.pop();
        _sinkDown(1, this.heapArray, this.comparator);
        return oldTop;

    }

    contains(item) {
        return _itemIndexes(item, this.heapArray, this.comparator).length > 0;
    }

    remove(item) {
        if(this.isEmpty()) {
            return;
        }

        const itemIdxs = _itemIndexes(item, this.heapArray, this.comparator);
        if(!itemIdxs.length) {
            return;
        }
        const toRemove = itemIdxs[0];
        this.heapArray[toRemove] = this.heapArray.pop();
        _sinkDown(toRemove, this.heapArray, this.comparator);
    }

    replaceRoot(item) {
        if(this.isEmpty()) {
            return null;
        }
        const oldTop = this.top();
        this.heapArray[1] = item;
        _sinkDown(1, this.heapArray, this.comparator);
        return oldTop;
    }

    size() {
        return this.heapArray.length - 1;
    }

    isEmpty() {
        return !this.size();
    }
}
