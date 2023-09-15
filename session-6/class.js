class Student {
  name = "";
  age = "";
  program = "";

  constructor(name, age, program) {
    this.name = name;
    this.age = age;
    this.program = program;
  }

  greeting() {
    console.log(`Hello, ${this.name}`);
  }
}

const student1 = new Student("Andi", 25, "Digital Marketing");

class Employee {
  constructor() {
    this.employeeName;
  }
  getEmployeeName() {
    return this.employeeName;
  }
  setEmployeeName(value) {
    this.employeeName = value;
  }
}
