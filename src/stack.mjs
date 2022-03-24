/* 
Implementation of a Stack as a linked list
*/

export const stack = () => {
    let size = 0;
    let head = null;

    /* 
    Conceptual description: add node to the top of the stack, (newNode = head)
    */

    const push = (data) => {
        let newNode = {
            data: data,
            next: null,
        };

        if (size === 0) head = newNode;

        if (size > 0) {
            newNode.next = head;

            head = newNode;
        }

        size++;
    };

    /* 
    Conceptual description: remove head from stack
    */

    const pop = () => {
        size--;

        const data = head.data;

        head = head.next;

        return data;
    };

    /* 
    Conceptual descriptions of each of the next 2 functions, peek at stack (only returns the head, and get the length of the stack)
    */

    const top = () => head.data;

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

    return { push, pop, top, getSize, toArray };
};
