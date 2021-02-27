
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
}

let firstStudent = new Student("Jonny", "Hak", 9);
let secondStudent = new Student("Alex", "Hak", 8);

secondStudent.grade = 2

console.log(firstStudent.markLate())
console.log(firstStudent.markLate())
console.log(firstStudent.tardies)
console.log(secondStudent.fullName())