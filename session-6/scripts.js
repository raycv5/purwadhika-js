const car = {
  brand: "BMW",
  model: "M135i xDrive",
  price: 800000000,
};

let user = {
  name: "David",
  age: 25,
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

// Add & deleting properties
user.age = 25;
delete user.age;
// Updating property
user.name = "Budi";

let person = {
  name: "Andi",
  age: 25,
  address: {
    city: "Bandung",
    country: "Indonesia",
  },
};

for (const key in person) {
  console.log(person[key]);
}

// Getter & Setter
let student = {
  firstName: "John",
  lastName: "Smith",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const splittedValue = value.split(" ");
    this.firstName = splittedValue[0];
    this.lastName = splittedValue[1];
  },
};

// Destructuring

let arr = ["apple", "lemon"];
let [a, b] = arr;
