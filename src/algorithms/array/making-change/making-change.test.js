import makingChange from './making-change';

test('makingChange()', () => {
    let denominations = [1, 5, 25];
    let amount = 32;
    expect(makingChange(denominations, amount)).toBe(9);
})

test('makingChange()', () => {
    let denominations = [1, 5, 25];
    let amount = 5;
    expect(makingChange(denominations, amount)).toBe(2);
})

test('makingChange()', () => {
    let denominations = [1, 5, 25];
    let amount = 1;
    expect(makingChange(denominations, amount)).toBe(1);
})