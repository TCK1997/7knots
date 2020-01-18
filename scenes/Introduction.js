class Introduction extends Phaser.Scene {
    constructor() {
        super("Introduction");
    }

    preload() {

    }
    
    create() {

        var font = { font: '24px Arial' };

        var text = this.add.text(60, 60, "INTRODUCTION STARTS HERE", font).setInteractive().on('pointerdown', function (pointer) {
            this.scene.scene.start("MainMenu")
        })
    }
    
    update() {
    
    }
}