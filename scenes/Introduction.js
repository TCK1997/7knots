class Introduction extends Phaser.Scene {
    constructor() {
        super("Introduction");
    }

    preload() {
        this.load.image('backBtn', '../assets/buttons/backBtn.png')
    }
    
    create() {

        var font = { font: '24px Arial' };

        var text = this.add.text(60, 60, "INTRODUCTION STARTS HERE", font)

        //Back button
        var backEvent = this.add.image(screenWidth*0.1, screenHeight*0.85, "backBtn", font).setInteractive().on('pointerdown', function (pointer) {
            this.scene.scene.start("MainMenu")
        })

        backEvent.on('pointerover',function(pointer){
            backEvent.setAlpha(0.75);
        })

        backEvent.on('pointerout',function(pointer){
            backEvent.setAlpha(1);
        })
        
    }
    
    update() {
    
    }
}