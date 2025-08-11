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

  // Optional: Getter for age (useful for tests)
  get age(): number {
    return this._age;
  }
}

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }

  study(): void {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }

  teach(): void {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

