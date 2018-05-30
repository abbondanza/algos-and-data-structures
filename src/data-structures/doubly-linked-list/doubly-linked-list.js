import DoublyLinkedListNode from './doubly-linked-list-node';

export default class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    getFirst() {
        return this.head ? this.head.value : null;
    }
    getLast() {
        return this.tail ? this.tail.value : null;
    }
    removeFirst() {
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.count = 0;
            return;
        }

        this.head = this.head.next;
        this.head.prev = null;
        this.count--;
    }
    removeLast() {
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.count = 0;
            return;
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
        this.count--;
    }
    addFirst(value) {
        let node = new DoublyLinkedListNode(value);
        this.count++;
        if(this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }
    addLast(value) {
        let node = new DoublyLinkedListNode(value);
        this.count++;
        if(this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    size() {
        return this.count;
    }

    asArray() {
        let node = this.head;
        let arr = [];
        while(node) {
            arr.push(node.value);
            node = node.next;
        }
        return arr;
    }

}
