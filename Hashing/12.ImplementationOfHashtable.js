class Node {
  constructor(key, data) {
    this.key = key;
    this.data = data; 
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; 
  }

  insertAtHead(key, data) {
    let newNode = new Node(key, data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  display() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

class Hashtable {
  constructor() {
    this.loadFactor = 0; 
    this.MAX_LOAD = 0.5; 
    this.size = 4; 
    this.noOfElements = 0; 
    this.bucket = new Array(this.size); 
  }

  hash(str, size) {
    let p = 1; 
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result = ((result % size) + ((str.charCodeAt(i) * p) % size)) % size;
      p = ((p % size) * 5381) % size;
    }
    return result;
  }

  rehash() {
    this.size *= 2; 
    let old = this.bucket;
    this.bucket = new Array(this.size);
    this.noOfElements = 0;
    for (let i = 0; i < old.length; i++) {
      if (old[i] == undefined) continue;
      let temp = old[i].head;
      while (temp != null) {
        this.insert(temp.key, temp.data);
        temp = temp.next;
      }
    }
  }

  insert(key, value) {
    const bucketIndex = this.hash(key, this.size);
    if (this.bucket[bucketIndex] == undefined) {
      let ll = new LinkedList();
      ll.insertAtHead(key, value);
      this.bucket[bucketIndex] = ll;
    } else {
      let temp = this.bucket[bucketIndex].head; 
            while (temp != null) {
        if (temp.key == key) {
          temp.data = value;
          return;
        }
        temp = temp.next;
      }
      this.bucket[bucketIndex].insertAtHead(key, value);
    }
    this.noOfElements++;
    this.loadFactor = this.noOfElements / this.size;
    if (this.loadFactor > this.MAX_LOAD) {
      this.rehash();
    }
  }

  search(key) {
    let bucketIndex = this.hash(key, this.size);
    let temp = this.bucket[bucketIndex].head;
    while (temp != null) {
      if (temp.key == key) return temp.data;
      temp = temp.next;
    }
    return undefined;
  }

  remove(key) {
    let bucketIndex = this.hash(key, this.size);
    let temp = this.bucket[bucketIndex].head;
    if (temp.key == key) {
        this.bucket[bucketIndex].head = temp.next;
        return;
    }
  }
}

let ht = new Hashtable();
ht.insert('india', 'delhi');
ht.insert('australia', 'sydney');
ht.insert('italy', 'rome');
ht.insert('swiss', 'zurich');
ht.insert('pakistan', 'islamabad');

console.log(ht.search('india'));
ht.remove('india');
console.log(ht.search('india'));
