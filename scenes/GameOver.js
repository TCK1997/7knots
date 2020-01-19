class GameOver extends Phaser.Scene {
    constructor() {
        super("GameOver");
    }

    preload() {
        this.load.image('tryAgainBtn', '../assets/buttons/tryAgainBtn.png')
        this.load.image('nextBtn', '../assets/buttons/nextBtn.png')
        this.load.image('gameOverFlag', '../assets/gameOverFlag.png')
        this.load.image('pirateScroll', '../assets/pirateScroll.png')
    }
    
    create() {
        //tryAgain button
        var tryAgainEvent = this.add.image(screenWidth*0.9, screenHeight*0.92, "tryAgainBtn").setInteractive().on('pointerdown', function (pointer) {
            reset()
            this.scene.scene.start("Introduction") //2. Mombasa
        })

        tryAgainEvent.on('pointerover',function(pointer){
            tryAgainEvent.setAlpha(0.75);
        })

        tryAgainEvent.on('pointerout',function(pointer){
            tryAgainEvent.setAlpha(1);
        })

        //Next button
        var nextEvent = this.add.image(screenWidth*0.08, screenHeight*0.92, "nextBtn").setInteractive().on('pointerdown', function (pointer) {
            reset()
            this.scene.scene.start("MainMenu")
        })

        nextEvent.on('pointerover',function(pointer){
            nextEvent.setAlpha(0.75);
        })

        nextEvent.on('pointerout',function(pointer){
            nextEvent.setAlpha(1);
        })

        this.add.image(screenWidth*0.22, screenHeight*0.1, "gameOverFlag").setOrigin(0).setScale(screenWidth/1500, screenHeight/800);       
        this.add.image(screenWidth*0.3, screenHeight*0.8, "pirateScroll").setOrigin(0).setScale(screenWidth/1400, screenHeight/800);         
    
        var font = { font: '24px Arial', fill: "#000", wordWrap: true, wordWrapWidth: scroll.width, align: "center" };

        var text = this.add.text(screenWidth*0.43, screenHeight*0.86, "GAME OVER", font)

    }
    
    update() {
    
    }
}