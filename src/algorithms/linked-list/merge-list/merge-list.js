/*
	Given two sorted lists, merge them in place.
	Returns pointer to sorted list contining all items.
*/

const mergeLists = (l1, l2) => {
    if(!l1) return l2;
    if(!l2) return l1;

    let header;
    if(l1.data < l2.data) {
        header = l1;
        l1 = l1.next;
    } else {
        header = l2;
        l2 = l2.next;
    }

    let prev = header;
    let curr = header;

    while(l1 && l2) {
        if(l1.data < l2.data) {
            curr = l1;
            l1 = l1.next;
        } else {
            curr = l2;
            l2 = l2.next;
        }

        prev.next = curr;
        prev = curr;
    }

    let node = (l1 || l2);
    while(node) {
        curr.next = node;
        curr = curr.next;
        node = node.next;
    }

    return header;
};

export default mergeLists;
