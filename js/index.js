const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;

var config = {
        type: Phaser.AUTO,
        width: screenWidth,
        height: screenHeight,
        scene: [MainMenu, Introduction, Port, WorldMap, SeaEvent, GameOver]
    };

var game = new Phaser.Game(config);