const DoublyLinkedList = require('./DoublyLinkedList');

test('should return the length greater than 0 after adding the elements', function () {
    
    let doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.add(1);
    doublyLinkedList.add(2);
    doublyLinkedList.add(3);
    doublyLinkedList.add(4);
    
    expect(doublyLinkedList.length()).toBeGreaterThan(0);
    expect(doublyLinkedList.length()).toBe(4);

    doublyLinkedList = null;
});