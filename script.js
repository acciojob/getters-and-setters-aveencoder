//complete this code
class Person {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Getter for name
  get name(): string {
    return this.name;
  }

  // Setter for age
  set age(age: number) {
    this.age = age;
  }}

class Student extends Person {

	constructor(name: string, age: number) {
    super(name, age);
	}
	study(): void{
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
   constructor(name: string, age: number) {
    super(name, age);
	}
	teach(): void{
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
