class Player {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }
  hit(target) {
    this.health -= target.power;
    console.log(
      `----------------------------------------------------------------`
    );
    console.log(`Player ${this.name} has been damaged by ${this.power} points`);
    console.log(`Player ${this.name} has ${this.health} remaining health`);
    console.log(
      `----------------------------------------------------------------`
    );
  }
  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }
  showStatus() {
    console.log(
      `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  getRandomItem() {
    let randomNum = Math.floor(Math.random() * 2);
    let randomNum2 = Math.floor(Math.random() * 2);
    return { health: randomNum2 * 10, power: randomNum * 10 };
  }
  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      this.player1.showStatus();
      this.player2.showStatus();

      let item1 = this.getRandomItem();
      let item2 = this.getRandomItem();

      this.player1.useItem(item1);
      this.player2.useItem(item2);

      console.log("After Random Item");
      this.player1.showStatus();
      this.player2.showStatus();

      this.player1.hit(this.player2);
      this.player2.hit(this.player1);

      console.log("After shooting");
    }
    if (this.player1.health <= 0) return `Player 2 Won`;
    else if (this.player2.health <= 0) return `Player 1 Won`;
  }
}

const player1 = new Player("Player 1");
const player2 = new Player("Player 2");

const game = new ShootingGame(player1, player2);
