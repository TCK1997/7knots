class MainMenu extends Phaser.Scene {
    constructor() {
        super("MainMenu");
    }

    preload() {
        this.load.image('bg', '../assets/sky.png');
        this.load.image('bg2', '../assets/introScreen.jpg');
    }
    
    create() {

        this.add.image(0, 0, 'bg').setOrigin(0).setScale( screenWidth / 800, screenHeight / 600);

        this.add.image(0, 0, 'bg2').setOrigin(0).setAlpha(0.25).setScale(screenWidth/344, screenHeight/256);

        var font = { font: '24px Arial' };

        var text = this.add.text(60, 60, "START", font).setInteractive().on('pointerdown', function (pointer) {
            this.scene.scene.start("Introduction")
        })
        
    }

    update() {
    }
}