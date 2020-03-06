class ForagerBee extends Bee {
  constructor(color) {
    super();
    this.age = 10;
    this.canFly = true;
    this.treasureChest = [];
    this.job = 'find pollen';
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
}
