// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor({ position, positEnemy }) {
    this.skin = '🌀';
    this.position = position;
    this.positEnemy = positEnemy;
  }

  fly() {
    if (this.position >= this.positEnemy) {
      this.moveLeft();
    }

    if (this.position < this.positEnemy) {
      this.moveRight();
    }
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
