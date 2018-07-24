import editDistance from './edit-distance';

test('editDistance() - same strings', () => {
	expect(editDistance('ABCDE', 'ABCDE')).toBe(0);
})

test('editDistance() - discrete strings', () => {
	expect(editDistance('HELLO', 'WAYMA')).toBe(5);
})

test('editDistance() - substring', () => {
	expect(editDistance('HELLO', 'HEL')).toBe(2);
})

test('editDistance() - different sizes, not substring', () => {
	expect(editDistance('HELLO', 'HEY')).toBe(3);
})

test('editDistance() - different sizes, discrete', () => {
	expect(editDistance('HELLO', 'WAY')).toBe(5);
})