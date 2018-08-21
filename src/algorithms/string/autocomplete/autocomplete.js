class TrieNode {
	constructor(prefix, isEnd) {
		this.children = {};
		this.prefix = prefix;
		this.isEnd = !!isEnd;
	}
}

const traverse = (trie, cb) => {
	if(trie.isEnd) {
		cb(trie);
	}
	let keys = Object.keys(trie.children);
	if(!keys.length) {
		return;
	}

	for(let i=0; i<keys.length; i++) {
		traverse(trie.children[keys[i]], cb);
	}
};

const autocomplete = (dict, prefix) => {
	let results = [];

	// build trie
	let trie = new TrieNode('');

	// loop through each word in dictionary
	for(let i=0; i<dict.length; i++) {
		let word = dict[i];
		let node = trie;

		// and through each letter in each word
		for(let j=0; j<word.length; j++) {
			let char = word.charAt(j);

			// if path to current node doesn't exist, create one
			if(!node.children[char]) {
				node.children[char] = new TrieNode(word.substr(0, j+1));
			}

			// if is not end, reconsider. think of -> 'hello' and 'hell'
			if(!node.children[char].isEnd) {
				node.children[char].isEnd = (j + 1 === word.length);
			}

			// iterate to next in word
			node = node.children[char];
		}
	}

	let node = trie;
	for(let k=0; k<prefix.length; k++) {
		let char = prefix.charAt(k);
		if(!node.children[char]) {
			return results;
		}

		node = node.children[char];
	}

	// search trie for all nodes on which a word ends
	traverse(node, (endNode) => {
		results.push(endNode.prefix);
	})

	// add those words to results array
	return results;
};

export default autocomplete;
