class MainMenu extends Phaser.Scene {
    constructor() {
        super("MainMenu");
    }

    preload() {
        this.load.image('bg', '../assets/sky.png');
        this.load.image('bg2', '../assets/introScreen.jpg');
        this.load.image('playBtn', '../assets/buttons/playBtn.png')
        this.load.image('continueBtn', '../assets/buttons/continueBtn.png')
    }
    
    create() {

        this.add.image(0, 0, 'bg').setOrigin(0).setScale( screenWidth / 800, screenHeight / 600);

        this.add.image(0, 0, 'bg2').setOrigin(0).setAlpha(0.25).setScale(screenWidth/344, screenHeight/256);

        //Game Name: 7Knots
        var font = { font: '50px Arial' };

        var gameName = this.add.text(screenWidth*0.2,screenHeight*0.3 , "7 Knots", font)

        //Play button
        var playEvent = this.add.image(screenWidth*0.8, screenHeight*0.35, "playBtn", font).setInteractive().on('pointerdown', function (pointer) {
            this.scene.scene.start("Introduction")
        })

        playEvent.on('pointerover',function(pointer){
            playEvent.setAlpha(0.75);
        })

        playEvent.on('pointerout',function(pointer){
            playEvent.setAlpha(1);
        })

        //Continue button
        var continueEvent = this.add.image(screenWidth*0.8, screenHeight*0.44, "continueBtn", font).setInteractive().on('pointerdown', function (pointer) {
            //Load saved game, continue from previous save
            this.scene.scene.start("Map");
        })

        continueEvent.on('pointerover',function(pointer){
            continueEvent.setAlpha(0.75);
        })

        continueEvent.on('pointerout',function(pointer){
            continueEvent.setAlpha(1);
        })
    }

    update() {
    }
}