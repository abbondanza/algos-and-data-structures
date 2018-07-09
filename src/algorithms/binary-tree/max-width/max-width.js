import Queue from '../../../data-structures/queue/queue';

const maxWidth = (root) => {
    let q1 = new Queue();
    q1.enqueue(root);

    let q2 = new Queue();

    let width = 0;
    while(q1.size() || q2.size()) {
        width = Math.max(q1.size(), width);
        while(q1.size()) {
            let node = q1.dequeue();
            if(node.left) q2.enqueue(node.left);
            if(node.right) q2.enqueue(node.right);
        }
        width = Math.max(q2.size(), width);
        while(q2.size()) {
            let node = q2.dequeue();
            if(node.left) q1.enqueue(node.left);
            if(node.right) q1.enqueue(node.right);
        }
    }
    return width;
};

export default maxWidth;
