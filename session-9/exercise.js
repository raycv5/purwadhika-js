// 1. Buat function ke template phone number (xxx-xxx-xxxx)
//    Example : '1234567890' -> '123-456-7890

const numberConversion = (num) => {
  let n = num.split("");
  let res = [];
  for (let i = 0; i < n.length; i++) {
    if (res.length === 5 || res.length === 9) {
      res.push("-");
      i--;
    } else if (res.length === 0) {
      res.push("(");
      i--;
    } else if (res.length === 4) {
      res.push(")");
      i--;
    } else res.push(n[i]);
  }
  return res.join("");
};

// 2. Buat class Train

// - masinis duduk di paling depan
// - maksimal penumpang 10
// - tidak boleh ada penumpang dengan nama yang sama
// - penumpang mengisi urutan kursi dari depan
// - penumpang bisa keluar kereta
// - penumpang baru, mengisi kursi kosong terlebih dahulu sesbelum ke kursi belakang

class Train {
  passenger = ["masinis"];
  maxPassenger = 11;

  constructor() {}

  isFull() {
    if (this.passenger.includes(undefined)) return false;
    return this.passenger.length >= this.maxPassenger;
  }

  isEmpty() {
    return this.passenger.length === 0;
  }

  emptySeat() {
    for (let i = 0; i < this.passenger.length; i++) {
      if (this.passenger[i] === undefined) return true;
    }
    return false;
  }

  findEmptySeat() {
    for (let i = 0; i < this.passenger.length; i++) {
      if (this.passenger[i] === undefined) return i;
    }
  }

  addPassenger(name) {
    if (this.isFull()) {
      return `The train is full`;
    } else if (this.passenger.includes(name)) {
      return `You cannot enter the train`;
    } else if (this.emptySeat()) {
      this.passenger[this.findEmptySeat()] = name;
      return this.passenger;
    } else {
      this.passenger.push(name);
      return this.passenger;
    }
  }

  removePassenger() {
    if (this.isEmpty()) {
      return `The train is empty`;
    } else {
      this.passenger.pop();
    }
    return this.passenger;
  }

  removePassengerAt(name) {
    if (!this.passenger.includes(name)) return `${name} is not on the train`;
    else {
      this.passenger[this.passenger.indexOf(name)] = undefined;
    }
    return this.passenger;
  }
}

const train = new Train();
