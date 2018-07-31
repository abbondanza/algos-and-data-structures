import autocomplete from './autocomplete';

test('autocomplete() - prefix is smaller than all words in dict', () => {
	let prefix = 'hel';
	let dict = ['hello', 'goodbye', 'help', 'hell', 'tchau'];

	expect(autocomplete(dict, prefix)).toEqual(['hello', 'help', 'hell']);
})

test('autocomplete() - some words are smaller than prefix', () => {
	let prefix = 'abc';
	let dict = ['a', 'ab', 'abc', 'abcd', 'nothing'];

	expect(autocomplete(dict, prefix)).toEqual(['abc', 'abcd']);
})

test('autocomplete() - word is prefix to nothing', () => {
	let prefix = 'abc';
	let dict = ['nope', 'notme', 'nowayjose', 'bye', 'nothing'];

	expect(autocomplete(dict, prefix)).toEqual([]);
})

test('autocomplete() - empty string is prefix to everything', () => {
	let prefix = '';
	let dict = ['we', 'are', 'all', 'in'];

	expect(autocomplete(dict, prefix)).toEqual(['we', 'are', 'all', 'in']);
})
