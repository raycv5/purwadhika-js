class Product {
  name = "";
  price = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const product1 = new Product("apple", 4000);
const product2 = new Product("orange", 2000);
const product3 = new Product("melon", 10000);
const product4 = new Product("banana", 2000);

class Transaction {
  total = 0;
  product = [];

  addToCart(item, qty) {
    item.qty = qty;
    this.product.push(item);
  }

  getTotal() {
    this.product.forEach((item) => {
      this.total += item.price * item.qty;
      console.log(`${item.name} x ${item.qty} = ${item.price * item.qty}`);
    });
    console.log(`Total : ${this.total}`);
  }

  checkOut(money) {
    if (money < this.total) {
      console.log("Uang tidak cukup");
    }
    console.log(money - this.total);
  }
}

const transaction1 = new Transaction();
transaction1.addToCart(product1, 3);
transaction1.addToCart(product2, 5);
transaction1.addToCart(product3, 2);
transaction1.addToCart(product4, 5);
