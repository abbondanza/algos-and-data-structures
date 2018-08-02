import autocomplete from './autocomplete';

test('autocomplete() - prefix is smaller than all words in dict', () => {
	expect(autocomplete(
		['hello', 'goodbye', 'help', 'hell', 'tchau'].sort(),
		'hel')
	).toEqual(['hello', 'help', 'hell'].sort());
})

test('autocomplete() - some words are smaller than prefix', () => {
	expect(autocomplete(
		['a', 'ab', 'abc', 'abcd', 'nothing'].sort(),
		'abc')
	).toEqual(['abc', 'abcd'].sort());
})

test('autocomplete() - word is prefix to nothing', () => {
	expect(autocomplete(
		['nope', 'notme', 'nowayjose', 'bye', 'nothing'].sort(),
		'abc'
	)).toEqual([]);
})

test('autocomplete() - empty string is prefix to everything', () => {
	expect(autocomplete(
		['we', 'are', 'all', 'in'].sort(),
		''
	)).toEqual(['we', 'are', 'all', 'in'].sort());
})
