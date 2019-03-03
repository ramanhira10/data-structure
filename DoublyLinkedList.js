class Node {
    
    constructor (data) {

        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {

    constructor () {
        this.head = null;
        this.tail = null;
        this.numberOfValues = 0;
    }

    add (data) {
        
        let node = new Node (data);
        
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        
        this.numberOfValues++;
    }

    remove (data) {

        let current = this.head;

        while (current) {
            if (current.data === data) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    this.head = this.head.next;
                    this.head.previous = null;
                } else if (current === this.tail) {
                    this.tail = this.tail.previous;
                    this.tail.next = null;
                } else {
                    current.previous.next = current.next;
                    current.previous.previous = current.previous;
                }
                this.numberOfValues--;
            }
            current = current.next;
        }
    }

    insertAfter () {}

    traverse () {}

    traverseReverse () {}

    length () {
        return this.numberOfValues;
    }

    print () {}
}

module.exports = DoublyLinkedList;