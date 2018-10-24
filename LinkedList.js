
class Node {

  constructor (data) {
    this.data = data;
    this.next = null;
  }

}

class LinkedList {

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

      this.tail.next = node;
      this.tail = node;
    }

    this.numberOfValues++;
  }

  remove (data) {

    let previous = this.head;
    let current = this.head;

    while (current) {

      if (current.data === data) {

        if (current === this.head) {
          this.head = this.head.next;
        }

        if (current === this.tail) {
          this.tail = previous;
        }

        previous.next = current.next;
        this.numberOfValues--;
      } else {

        previous = current;
      }

      current = current.next;
    }
  }

  insertAfter (data, toNodeData) {

    let current = this.head;

    while (current) {

      if (current.data === toNodeData) {

        let node = new Node (data);

        if (current === this.tail) {

          this.tail.next = node;
          this.tail = node;
        } else {

          node.next = current.next;
          current.next = node;
        }
        this.numberOfValues++;
      }

      current = current.next;
    }
  }

  traverse (fn) {

    let current = this.head;

    while (current) {

      if (fn) {
        fn(current);
      }

      current = current.next;
    }
  }

  length () {
    return this.numberOfValues;
  }

  print () {

    let str = '';
    let current = this.head;

    while (current) {
      str += current.data + ' ';
      current = current.next;
    }

    return str.trim();
  }
}

var linkedList = new LinkedList();
console.log(linkedList.print());
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
console.log(linkedList.print());

linkedList.remove(3);
console.log(linkedList.print());

linkedList.insertAfter(5, 2);
console.log(linkedList.print());
linkedList.traverse((node) => {
  node.data = node.data + 10;
});
console.log(linkedList.print());
console.log(linkedList.length());
