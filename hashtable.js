class HashTable {

  _calculateHash (key) {

    return (key.toString().length % this.size);
  }

  constructor (size) {

    this.values = {};
    this.numberOfValues = 0;
    this.size = size;
  }

  add (key, value) {

    let hash = this._calculateHash(key);

    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }

    if (!this.values[hash].hasOwnProperty(key)) {
      this.numberOfValues++;
    }

    this.values[hash][key] = value;
  }

  remove (key) {

    let hash = this._calculateHash(key);

    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      delete this.values[hash][key];
      this.numberOfValues--;
    }
  }

  search (key) {

    let hash = this._calculateHash(key);

    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      return this.values[hash][key];
    }

    return null;
  }

  length () {

    return this.numberOfValues;
  }

  print () {

    let str = '';

    for (let value in this.values) {

      for (let key in this.values[value]) {

        str += `${this.values[value][key]} `;
      }
    }

    return str;
  }
}

let hashTable = new HashTable(3);
hashTable.add('first', 1);
hashTable.add('second', 2);
hashTable.add('third', 3);
hashTable.add('fourth', 4);
hashTable.add('fifth', 5);
console.log(hashTable.print());
console.log('length gives 5:', hashTable.length());
console.log('search second gives 2:', hashTable.search('second'));
hashTable.remove('fourth');
hashTable.remove('first');
console.log(hashTable.print());
console.log('length gives 3:', hashTable.length());
