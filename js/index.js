const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;

var config = {
        type: Phaser.AUTO,
        width: screenWidth,
        height: screenHeight,
        scene: [GameOver, Port, MainMenu, Introduction, WorldMap, SeaEvent]
    };

var game = new Phaser.Game(config);