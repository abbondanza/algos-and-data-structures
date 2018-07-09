import MaxHeap from '../max-heap/max-heap';

export default class PriorityQueue {
    constructor(valComparator) {
        this.priorities = {};
        this.heap = new MaxHeap(((itemA, itemB) => {
            if(this.priorities[itemB] === this.priorities[itemA]) {
                return valComparator ? valComparator(itemA, itemB) : (itemB - itemA);
            }
            return this.priorities[itemB] - this.priorities[itemA];
        }).bind(this));
    }
    isEmpty() {
        return this.heap.isEmpty();
    }
    changePriority(item, newPriority) {
        this.heap.remove(item);
        this.insert(item, newPriority);
    }
    insert(item, priority) {
        this.priorities[item] = priority;
        this.heap.insert(item);
    }
    poll() {
        let item = this.heap.extractTop();
        delete this.priorities[item];
        return item;
    }
    peek() {
        return this.heap.top();
    }
    size() {
        return this.heap.size();
    }
}
