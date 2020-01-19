class SeaEvent extends Phaser.Scene {
    constructor() {
        super("SeaEvent");
    }

    preload() {
        this.load.image('stormSeaEvent', '../assets/stormSeaEvent.jpg')
    }
    
    create() {
        const sea = this.add
        .image(0, 0, "stormSeaEvent")
        .setOrigin(0)
        .setScale(screenWidth/1920, screenHeight/1920);


    }

    update() {
    }
}