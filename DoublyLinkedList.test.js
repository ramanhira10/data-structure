const DoublyLinkedList = require('./DoublyLinkedList');

describe('should check Doubly Linked list', () => {

    let doublyLinkedList = null;

    beforeEach(() => {

        doublyLinkedList = new DoublyLinkedList();
    });

    afterEach(() => {

        doublyLinkedList = null;
    });

    test('should add elements in linked list', () => {
        
        doublyLinkedList.add(1);
        doublyLinkedList.add(2);
        doublyLinkedList.add(3);
        doublyLinkedList.add(4);
        
        expect(doublyLinkedList.length()).toBeGreaterThan(0);
        expect(doublyLinkedList.length()).toBe(4);
    });

    test('should remove the elements from linked list', () => {
        
        doublyLinkedList.add(1);
        doublyLinkedList.add(2);
        doublyLinkedList.add(3);
        doublyLinkedList.add(4);
        
        expect(doublyLinkedList.length()).toBeGreaterThan(0);
        expect(doublyLinkedList.length()).toBe(4);

        doublyLinkedList.remove(3);
        
        expect(doublyLinkedList.length()).toBe(3);
    });

    test('should insert after the given data', () => {
        
        doublyLinkedList.add(1);
        doublyLinkedList.add(2);
        doublyLinkedList.add(3);
        doublyLinkedList.add(4);
        
        expect(doublyLinkedList.length()).toBeGreaterThan(0);
        expect(doublyLinkedList.length()).toBe(4);

        doublyLinkedList.insertAfter(5, 3);
        
        expect(doublyLinkedList.length()).toBe(5);
        
        //doublyLinkedList.print();
    });

    test ('should traverse the linked list in forward direction, print', () => {

        doublyLinkedList.add(1);
        doublyLinkedList.add(2);
        doublyLinkedList.add(3);
        doublyLinkedList.add(4);

        doublyLinkedList.traverse(function (node) {
            node.data = node.data + 10;
        });

        doublyLinkedList.print();
    });

    test ('should traverse the linked list in backward direction, print', () => {

        doublyLinkedList.add(1);
        doublyLinkedList.add(2);
        doublyLinkedList.add(3);
        doublyLinkedList.add(4);

        doublyLinkedList.traverseReverse(function (node) {
            node.data = node.data + 20;
        });

        doublyLinkedList.print();
    });
});