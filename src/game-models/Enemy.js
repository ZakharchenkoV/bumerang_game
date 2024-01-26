// Враг.

class Enemy {
  constructor({ position, skin }) {
    this.position = position;
    this.skin = skin;
    this.generateSkin();
  }

  generateSkin() {
    const skins = ['🕺', '👹', '👻', '👽', '👿', '🤡', '🤺', '🧛', '🧟'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft(posBoom) {
    if (this.position > posBoom) {
      this.position -= 1;
    }
  }

  die(posBoom) {
    if (this.position === posBoom) {
      this.skin = '💀';
      console.log('Enemy is dead!');
    }
  }
}

module.exports = Enemy;
