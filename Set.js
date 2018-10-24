class Set {

  constructor () {

    this.values = [];
    this.numberOfValues = 0;
  }

  add (value) {

    if (!~this.values.indexOf(value)) {
      this.values.push(value);
      this.numberOfValues++;
    }
  }

  remove (value) {

    let index = this.values.indexOf(value);

    if (~index) {
      this.values.splice(index, 1);
      this.numberOfValues--;
    }
  }

  contains (value) {

    return this.values.indexOf(value) !== -1;
  }

  union (set) {

    let newSet = new Set();

    set.values.forEach ((value) => {
        newSet.add(value);
    });

    this.values.forEach ((value) => {
        newSet.add(value);
    });

    return newSet;
  }

  intersect (set) {

    let newSet = new Set ();

    this.values.forEach ((value) => {

      if (set.contains(value)) {
        newSet.add(value);
      }
    });

    return newSet;
  }

  difference (set) {

    let newSet = new Set ();

    this.values.forEach ((value) => {

      if (!set.contains(value)) {

        newSet.add(value);
      }
    });

    return newSet;
  }

  isSubset (set) {

    return set.values.every ((value) => {
      return this.contains(value);
    });
  }

  length () {
    return this.numberOfValues;
  }

  print () {

    return this.values.join (' ');
  }
}



let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
console.log(set.print());
set.remove(3);
console.log(set.print());
console.log('contains 4 is true:', set.contains(4));
console.log('contains 3 is false:', set.contains(3));
console.log('---');
let set1 = new Set();
set1.add(1);
set1.add(2);
let set2 = new Set();
set2.add(2);
set2.add(3);
let set3 = set2.union(set1);
console.log(set3.print());
console.log('---');
let set4 = set2.intersect(set1);
console.log(set4.print());
console.log('---');
let set5 = set.difference(set3);
console.log('---');
console.log(set5.print());
console.log('---');
let set6 = set3.difference(set);
console.log('---');
console.log(set6.print());
console.log('---');
console.log('set1 subset of set is true:', set.isSubset(set1), set.values, set1.values);
console.log('set2 subset of set is false:', set.isSubset(set2), set.values, set2.values);
console.log('set1 length gives 2:', set1.length());
console.log('set3 length gives 3:', set3.length());
