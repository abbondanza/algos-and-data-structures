import DoublyLinkedList from '../doubly-linked-list/doubly-linked-list';

export default class Stack {
    constructor() {
        this.list = new DoublyLinkedList();
    }
    dequeue() {
        const last = this.list.getLast();
        this.list.removeLast();
        return last;
    }
    enqueue(item) {
        this.list.addFirst(item);
    }
    size() {
        return this.list.size();
    }
    peek() {
        return this.list.getFirst();
    }
    asArray() {
        return this.list.asArray();
    }
}
