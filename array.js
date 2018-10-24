class MyArray {

  constructor () {

    this.array = [];
  }

  add (data) {

    this.array.push(data);
  }

  remove (data) {

    this.array = this.array.filter ((currentData) => {
      return (currentData !== data);
    });
  }

  search (data) {

    let index = this.array.indexOf(data);

    if (index !== -1) {
      return index;
    }

    return null;
  }

  getAtIndex (index) {

    return this.array[index];
  }

  length () {

    return this.array.length;
  }

  print () {

    return this.array.join (' ');
  }
}



let array = new MyArray();
array.add(1);
array.add(2);
array.add(3);
array.add(4);
console.log(array.print());
console.log('search 3 gives index 2:', array.search(3)); // => 2
console.log('getAtIndex 2 gives 3:', array.getAtIndex(2)); // => 3
console.log('length is 4:', array.length()); // => 4
array.remove(3);
console.log(array.print());
array.add(5);
array.add(5);
console.log(array.print());
array.remove(5);
console.log(array.print());

array.search(8);
array.getAtIndex(8);
