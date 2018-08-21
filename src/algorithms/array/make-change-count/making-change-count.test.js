import makeChangeCount from './make-change-count';

test('makeChangeCount()', () => {
    let denominations = [1, 5, 25];
    let amount = 32;
    expect(makeChangeCount(denominations, amount)).toBe(9);
})

test('makeChangeCount()', () => {
    let denominations = [1, 5, 25];
    let amount = 5;
    expect(makeChangeCount(denominations, amount)).toBe(2);
})

test('makeChangeCount()', () => {
    let denominations = [1, 5, 25];
    let amount = 1;
    expect(makeChangeCount(denominations, amount)).toBe(1);
})