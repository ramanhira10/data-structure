/**
 * A Queue is a particular kind of abstract data type or collection in which
 * the entities in the collection are kept in order and the principal operations are
 * the addition of entities to the rear terminal position, known as enqueue,
 * and removal of entities from the front terminal position, known as dequeue.
 * This makes the Queue a First-In-First-Out (FIFO) data structure.
 * In a FIFO data structure, the first element added to the Queue will be the first
 * one to be removed.
 * 
 * Complexity
 * Average	 	 	 
 * Access	Search	Insertion	Deletion
 * O(n)	O(n)	O(1)	O(n)
 * 
 */

class Queue {

    constructor () {
        this.queue = [];
    }

    enqueue (value) {
        this.queue.push(value);
    }

    dequeue () {
        return this.queue.shift();
    }

    peek () {
        return this.queue[0];
    }

    length () {
        return this.queue.length;
    }

    print () {
        console.log(this.queue.join(' '));
    }
}

module.exports = Queue;