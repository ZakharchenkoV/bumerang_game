// Враг.

class Enemy {
  constructor({ position, skin }) {
    this.position = position;
    this.skin = skin;
    this.generateSkin();
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die(param) {
    if (this.position === param) {
      this.skin = '💀';
      console.log('Enemy is dead!');
    }
  }
}

module.exports = Enemy;
