var config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        scene: {
            preload,
            create,
            update
        }
    };

var game = new Phaser.Game(config);

function preload() {
    this.load.image('bg', '../assets/introScreen.jpg');
}

function create() {
    this.add.image(0, 0, 'bg').setOrigin(0).setScale(4.5,3);
}

function update() {

}