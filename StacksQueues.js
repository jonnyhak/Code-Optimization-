
// let q = [];

// q.push("First")
// q.push("Second")
// q.push("Third")

// console.log(q.shift())
// console.log(q)

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }
    enqueue(val){
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode 
        }
        return ++this.size
    }
    dequeue(){
        if(!this.first) return null;

        let temp = this.first;
        if (this.first === this.last){
            this.first = this.first.next;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value
    }
}

let q = new Queue()

q.enqueue("First")
q.enqueue("Second")
q.enqueue("Third")

console.log(q)

q.dequeue()
console.log(q)