const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;

var config = {
        type: Phaser.AUTO,
        width: screenWidth,
        height: screenHeight,
        scene: [Port, MainMenu, Introduction, WorldMap, SeaEvent, GameOver]
    };

var game = new Phaser.Game(config);