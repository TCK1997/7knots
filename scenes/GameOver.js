class GameOver extends Phaser.Scene {
    constructor() {
        super("GameOver");
    }

    preload() {
        this.load.image('tryAgainBtn', '../assets/buttons/tryAgainBtn.png')
        this.load.image('nextBtn', '../assets/buttons/nextBtn.png')
    }
    
    create() {
        //tryAgain button
        var tryAgainEvent = this.add.image(screenWidth*0.08, screenHeight*0.92, "tryAgainBtn", font).setInteractive().on('pointerdown', function (pointer) {
            currentLocation = getLocation();
            futureLocation = 0;
            console.log(currentLocation, futureLocation)
            distance = calculateDistance(currentLocation, futureLocation);
            moveToPlace(distance);
            setLocation(0);
            this.scene.scene.start("Port") //2. Mombasa
        })

        tryAgainEvent.on('pointerover',function(pointer){
            tryAgainEvent.setAlpha(0.75);
        })

        tryAgainEvent.on('pointerout',function(pointer){
            tryAgainEvent.setAlpha(1);
        })

        //Next button
        var nextEvent = this.add.image(screenWidth*0.9, screenHeight*0.92, "nextBtn", font).setInteractive().on('pointerdown', function (pointer) {
            this.scene.scene.start("MainMenu")
        })

        nextEvent.on('pointerover',function(pointer){
            nextEvent.setAlpha(0.75);
        })

        nextEvent.on('pointerout',function(pointer){
            nextEvent.setAlpha(1);
        })
        
    }
    
    update() {
    
    }
}