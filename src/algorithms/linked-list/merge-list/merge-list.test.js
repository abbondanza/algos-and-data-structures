
import mergeLists from './merge-list';
class LinkedListNode {
	constructor(data, next) {
		this.data = data;
		this.next = next || null;
	}
}

const toArray = (listNode) => {
	let arr = [];
	while(listNode) {
		arr.push(listNode.data);
		listNode = listNode.next;
	}
	return arr;
};

const createLinkedListFromArray = (arr) => {
	let pointer = new LinkedListNode(arr[0]);
	let head = pointer;
	for(let i=1; i<arr.length; i++) {
		pointer.next = new LinkedListNode(arr[i]);
		pointer = pointer.next;
	}
	return head;
};

test('mergeLists() - same size lists', () => {

	let l1 = createLinkedListFromArray([1, 3, 5, 7]);
	let l2 = createLinkedListFromArray([2, 4, 6, 8]);
	let joint = mergeLists(l1, l2);

	expect(toArray(joint)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
})

test('mergeLists() - different size lists', () => {

	let l1 = createLinkedListFromArray([1, 3, 5, 7]);
	let l2 = createLinkedListFromArray([2, 4, 6, 8, 10]);
	let joint = mergeLists(l1, l2);

	expect(toArray(joint)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 10])
})

test('mergeLists() - only one list', () => {

	let l1 = createLinkedListFromArray([1, 3, 5, 7]);
	let joint = mergeLists(l1, null);

	expect(toArray(joint)).toEqual([1, 3, 5, 7])
})
