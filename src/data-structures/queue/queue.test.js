import Queue from './queue';

test('size() of empty queue', () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);
})

test('enqueue()', () => {
    const queue = new Queue();
    queue.enqueue('FIRST');
    queue.enqueue('SECOND');
    expect(queue.size()).toBe(2);
})

test('dequeue()', () => {
    const queue = new Queue();
    queue.enqueue('FIRST');
    queue.enqueue('SECOND');
    queue.enqueue('THIRD');
    const result = queue.dequeue();

    expect(queue.size()).toBe(2);
    expect(result).toBe('FIRST');
})

test('dequeue() empty queue', () => {
    const queue = new Queue();
    const result = queue.dequeue();

    expect(queue.size()).toBe(0);
    expect(result).toBe(null);
})
