import Stack from './stack';

test('size() of empty stack', () => {
    const stack = new Stack();
    expect(stack.size()).toBe(0);
})

test('peek()', () => {
    const stack = new Stack();
    stack.push('ONE');

    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe('ONE');
})

test('push()', () => {
    const stack = new Stack();
    stack.push('ONE'); // ONE
    stack.push('TWO'); // ONE | TWO
    stack.push('THREE'); // ONE | TWO | THREE

    expect(stack.size()).toBe(3);
    expect(stack.peek()).toBe('THREE');
})

test('pop()', () => {
    const stack = new Stack();
    stack.push('ONE'); // ONE
    stack.push('TWO'); // ONE | TWO
    stack.push('THREE'); // ONE | TWO | THREE
    const result = stack.pop();  // ONE | TWO

    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe('TWO');
    expect(result).toBe('THREE');
})
