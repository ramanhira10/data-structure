/**
 * A Stack is an abstract data type that serves as a collection of elements, with
 * two principal operations: push, which adds an element to the collection, and pop, 
 * which removes the most recently added element that was not yet removed. The order in
 * which elements come off a Stack gives rise to its alternative name,
 * LIFO (for last in, first out).
 * 
 * Complexity
 * Average
 * Access	Search	Insertion	Deletion
 * O(n)	O(n)	O(1)	O(1)
 */

class Stack {

    constructor () {
        this.stack = [];
    }

    push (value) {
        this.stack.push(value);
    }

    pop () {
        return this.stack.pop();
    }

    peek () {
        return this.stack[this.stack.length - 1];
    }

    length () {
        return this.stack.length;
    }

    print () {
        console.log(this.stack.join(' '));
    }
}

module.exports = Stack;