
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate(){
        this.tardies += 1
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    static EnrollStudents(){
        return "Enrolling Students"
    }
}

let firstStudent = new Student("Jonny", "Hak", 9);
let secondStudent = new Student("Alex", "Hak", 8);

secondStudent.grade = 2

// console.log(firstStudent.markLate())
// console.log(firstStudent.markLate())
// console.log(firstStudent.tardies)
// console.log(secondStudent.fullName())
// console.log(Student.EnrollStudents())

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }
    get(index){
        if(index < 0 || index >= this.length) return null
        let count = 0;
        let current = this.head;
        while(count !== index){
            current = current.next;
            count++
        }
        return current
    }
    set(index, val){
        let foundNode = this.get(index);
        if (foundNode){
            foundNode.val = val;
            return true  
        }
        return false
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false 
        if(index === this.length) return this.push(val);
        // if(index === 0) this.unshift  
    }

}

let list = new SinglyLinkedList()
list.push("HI")
list.push("YOU")
list.push("!")

// console.log(list)
console.log(list.set(2, "!!!"))
console.log(list.get(2))



