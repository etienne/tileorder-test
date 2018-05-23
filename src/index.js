import 'phaser';

var game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'container',
  width: 640,
  height: 640,
  backgroundColor: 0xbfbfbf,
  pixelArt: true,
  scene: {
    preload: function() {
      this.load.image('tileset', 'assets/images/tileset.png');
      this.load.tilemapTiledJSON('map', 'assets/json/map.json');
    },
    create: function() {
      const map = this.make.tilemap({ key: 'map' });
      const tiles = map.addTilesetImage('tileset', 'tileset');
      map.createDynamicLayer('floor', tiles, 0, 0);
      map.createDynamicLayer('objects', tiles, 0, 0);
      this.cameras.main.scrollX = 120;
      this.cameras.main.scrollY = 80;
      this.cameras.main.zoom = 0.333;
    }
  },
});
