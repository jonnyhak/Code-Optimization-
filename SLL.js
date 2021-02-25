
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

let firstStudent = new Student("Jonny", "Hak", 9);
let secondStudent = new Student("Alex", "Hak", 8);

console.log(firstStudent)
console.log(secondStudent)