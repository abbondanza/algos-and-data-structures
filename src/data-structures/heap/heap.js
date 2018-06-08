const _swimUp = (index, arr, comparator) => {
    // There is no more swimming up
    if(index === 0) {
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
        if(comparator(node, arr[left]) < 0) {
            _swap(left, index, arr);
            _sinkDown(left, arr, comparator);
        }
    // node has both children
    } else {
        let largest = left;
        if(comparator(arr[left], arr[right]) < 0) {
            largest = right;
        }

        if(comparator(node, arr[largest]) < 0) {
            _swap(largest, index, arr);
            _sinkDown(largest, arr, comparator);
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

export default class Heap {
    constructor(comparator) {
        this.heapArray = [];
        this.comparator = comparator;
    }

    top() {
        return this.isEmpty() ? null : this.heapArray[0];
    }

    insert(item) {
        this.heapArray.push(item);
        _swimUp(this.heapArray.length - 1, this.heapArray, this.comparator);
    }

    extractTop() {
        if(this.isEmpty()) {
            return null;
        }
        const oldTop = top();
        this.heapArray[0] = this.heapArray.pop();
        _sinkDown(0, this.heapArray, this.comparator);
        return oldTop;

    }

    replaceRoot(item) {
        if(this.isEmpty()) {
            return null;
        }
        const oldTop = this.top();
        this.heapArray[0] = item;
        _sinkDown(0, this.heapArray, this.comparator);
        return oldTop;
    }

    size() {
        return this.heapArray.length;
    }

    isEmpty() {
        return !this.size();
    }
}
