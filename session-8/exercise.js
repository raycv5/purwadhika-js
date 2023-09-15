class Employee {
  constructor(employeeType, hourlyRate) {
    this.employeeType = employeeType;
    this.hourlyRate = hourlyRate;
    this.dailyWorkingHours = 0;
  }

  addWorkingHours(hours) {
    if (hours <= 0) console.log("Hour must be greater than 0");
    else this.dailyWorkingHours += hours;
  }
}

class FulltimeEmployee extends Employee {
  constructor() {
    super("Fulltime", 100000);
  }
  calculateSalary() {
    let totalSalary = this.hourlyRate * this.dailyWorkingHours;
    if (this.dailyWorkingHours > 6) {
      totalSalary =
        6 * this.hourlyRate +
        (this.dailyWorkingHours - 6) * (this.hourlyRate - 25000);
    }
    return totalSalary;
  }
}

class ParttimeEmployee extends Employee {
  constructor() {
    super("Parttime", 50000);
  }
  calculateSalary() {
    let totalSalary = this.hourlyRate * this.dailyWorkingHours;
    if (this.dailyWorkingHours > 6) {
      totalSalary =
        6 * this.hourlyRate +
        (this.dailyWorkingHours - 6) * (this.hourlyRate - 20000);
      return totalSalary;
    }
  }
}

const fullTimeEmployee = new FulltimeEmployee();
const partTimeEmployee = new ParttimeEmployee();
