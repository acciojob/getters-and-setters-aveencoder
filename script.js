// 1. Person Class
class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name(): string {
    return this._name;
  }

  // Setter for age
  set age(age: number) {
    this._age = age;
  }
}

// 2. Student Class (inherits from Person)
class Student extends Person {
  study(): void {
    console.log(`${this.name} is studying`);
  }
}

// 3. Teacher Class (inherits from Person)
class Teacher extends Person {
  teach(): void {
    console.log(`${this.name} is teaching`);
  }

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
