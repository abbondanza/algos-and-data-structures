import MaxHeap from '../max-heap/max-heap';
import Queue from '../queue/queue';

const _comparePriorities = (pA, pB) => {
    return pB - pA;
}

export default class FifoPriorityQueue {
    constructor() {
        this.heap = new MaxHeap(_comparePriorities);
        this.queues = {};
        this._size = 0;
    }
    isEmpty() {
        return this.heap.isEmpty();
    }
    insert(item, priority) {
        if(this.queues[priority]) {
            this.queues[priority].enqueue(item);
        } else {
            this.queues[priority] = new Queue();
            this.queues[priority].enqueue(item);
            this.heap.insert(priority);
        }

        this._size++;
    }
    poll() {
        let priority = this.heap.top();
        if(!this.queues[priority]) {
            return;
        }

        let item = this.queues[priority].dequeue();
        if(!this.queues[priority].size()) {
            this.heap.extractTop();
        }

        this._size--;
        return item;
    }
    peek() {
        let priority = this.heap.top();
        if(!this.queues[priority]) {
            return;
        }

        return this.queues[priority].peek();
    }
    size() {
        return this._size;
    }
}
