const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;

var config = {
        type: Phaser.AUTO,
        width: screenWidth,
        height: screenHeight,
        scene: {
            preload,
            create,
            update
        }
    };

var game = new Phaser.Game(config);

function preload() {
    this.load.image('bg', '../assets/sky.png');
    this.load.image('bg2', '../assets/introScreen.jpg');
}

function create() {
    this.add.image(0, 0, 'bg').setOrigin(0).setScale( screenWidth / 800, screenHeight / 600);
    this.add.image(0, 0, 'bg2').setOrigin(0).setAlpha(0.25).setScale(screenWidth/344, screenHeight/256);
}

function update() {

}