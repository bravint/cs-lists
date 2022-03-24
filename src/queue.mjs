/* 
Implementation of a Queue as a double linked list
*/

export const queue = () => {
    let size = 0;
    let head,
        tail = null;

    /*
    Conceptual description: add node to the end of the queue
    */

    const enQueue = (data) => {
        const newNode = {
            data: data,
            next: null,
        };

        if (size === 0) head = newNode;

        if (size > 0) {
            size === 1 ? (head.next = newNode) : (tail.next = newNode);

            tail = newNode;
        }

        size++;
    };

    /*
    Conceptual description: remove node from the front/start of the queue
    */

    const deQueue = () => {
        size--;

        const data = head.data;

        head = head.next;

        return data;
    };

    /* 
    Conceptual descriptions of each of the next 3 functions: peek at first,last, and length of queue
    */

    const front = () => head.data;

    const back = () => tail.data;

    const getSize = () => size;

    /*
    Conceptual description: Push node.data to array up to and including the node where node.next === null (which is the tail of the queue)
    */

    const toArray = () => {
        let listArray = [];

        let currentNode = head;

        while (currentNode) {
            listArray.push(currentNode.data);

            currentNode = currentNode.next;
        }

        return listArray;
    };

    return { enQueue, deQueue, front, back, getSize, toArray };
};
