// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor({ position, positEnemy }) {
    this.skin = '🌀';
    this.position = position;
    this.positEnemy = positEnemy;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  fly(skin, heroPos) {
    if (skin === '💀' && heroPos < this.position) {
      this.moveLeft();
    } else if (skin !== '💀') {
      this.moveRight();
    }
  }

  // async fly() {
  //   do {
  //     await new Promise((res) => {
  //       setTimeout(() => {
  //         res();
  //       }, 100);
  //     });
  //     this.moveRight();
  //   } while (this.position < this.positEnemy);

  //   do {
  //     await new Promise((res) => {
  //       setTimeout(() => {
  //         res();
  //       }, 100);
  //     });
  //     this.moveLeft();
  //   } while (this.position > this.positEnemy);
  // }
}

module.exports = Boomerang;
