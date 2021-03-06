var GameMenu = function() {};

GameMenu.prototype = {

  menuConfig: {
    startY: 260,
    startX: 30
  },

  init: function () {
    this.titleText = game.make.text(game.world.centerX, 100, "Wowtari", {
      font: 'bold 60pt TheMinion',
      fill: '#FDFFB5',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },

  create: function () {

    
    game.stage.disableVisibilityChange = true;
    game.add.existing(this.titleText);

    this.addMenuOption('Start', function () {
      game.state.start("Ragnaros");
    });
    this.addMenuOption('Options', function () {
      game.state.start("Options");
    });
  }
};

Phaser.Utils.mixinPrototype(GameMenu.prototype, mixins);
