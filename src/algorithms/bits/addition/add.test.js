import add from './add.js';

test('adds 2 non-negative 32-bit integers', () => {
	expect(add(134, 1791)).toBe(134 + 1791);
})

test('adds 2 non-negative 32-bit integers', () => {
	expect(add(1, 2)).toBe(1 + 2);
})
