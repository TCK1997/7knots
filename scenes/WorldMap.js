class WorldMap extends Phaser.Scene {
    
    constructor() {
        super("WorldMap");
        
    }

    preload() {
        this.load.image('gameMap', '../assets/gameMap.png')
        this.load.image('backBtn', '../assets/buttons/backBtn.png')
        this.load.image('compass', '../assets/compass.png')
        this.load.image('pirateScroll', '../assets/pirateScroll.png')
    }
    
    create() {
        // text1 = this.add.text(10, 10, '', { fill: '#00ff00' });
        // this.input.mouse.disableContextMenu();

        var gameMapEvent = this.add.image(0, 0, 'gameMap').setOrigin(0).setScale( screenWidth / 1326, screenHeight / 1013).setInteractive().on('pointerdown', function (pointer) {
            if ((pointer.x < 95 && pointer.y < 240) && (pointer.y > 200)) {
                console.log(1)
                this.scene.scene.start("Port") //1. Cidade
            } else if ((pointer.x < screenWidth/980*437 && pointer.y < screenHeight/816*460) && (pointer.x > screenWidth/980*360 && pointer.y > screenHeight/816*437)) {
                console.log(2)
                this.scene.scene.start("Port") //2. Mombasa
            } else if ((pointer.x < screenWidth/980*567 && pointer.y < screenHeight/816*343) && (pointer.x > screenWidth/980*500 && pointer.y > screenHeight/816*322)) {
                this.scene.scene.start("Port") //3. Socotra
            } else if ((pointer.x < screenWidth/980*660 && pointer.y < screenHeight/816*340) && (pointer.x > screenWidth/980*614 && pointer.y > screenHeight/816*312)) {
                this.scene.scene.start("Port") //4. Goa
            } else if ((pointer.x < screenWidth/980*670 && pointer.y < screenHeight/816*368) && (pointer.x > screenWidth/980*610 && pointer.y > screenHeight/816*345)) {
                this.scene.scene.start("Port") //5. Calicut
            } else if ((pointer.x < screenWidth/980*708 && pointer.y < screenHeight/816*410) && (pointer.x > screenWidth/980*656 && pointer.y > screenHeight/816*374)) {
                this.scene.scene.start("Port") //6. Colombo
            } else if ((pointer.x < screenWidth/980*890 && pointer.y < screenHeight/816*424) && (pointer.x > screenWidth/980*824 && pointer.y > screenHeight/816*406)) {
                this.scene.scene.start("Port") //7. Malacca
            } else if ((pointer.x < screenWidth/980*974 && pointer.y < screenHeight/816*513) && (pointer.x > screenWidth/980*916 && pointer.y > screenHeight/816*479)) {
                this.scene.scene.start("Port") //8. Makassar
            } else if ((pointer.x < screenWidth/980*935 && pointer.y < screenHeight/816*239) && (pointer.x > screenWidth/980*890 && pointer.y > screenHeight/816*200)) {
                this.scene.scene.start("Port") //9. Canton
            } else if ((pointer.x < screenWidth/980*130 && pointer.y < screenHeight/816*85) && (pointer.x > screenWidth/980*75 && pointer.y > screenHeight/816*67)) {
                this.scene.scene.start("Port") //0. Lisbon
            }
        })

        //Back button
        var backEvent = this.add.image(screenWidth*0.08, screenHeight*0.92, "backBtn").setInteractive().on('pointerdown', function (pointer) {
            this.scene.scene.start("MainMenu")
        })

        backEvent.on('pointerover',function(pointer){
            backEvent.setAlpha(0.75);
        })

        backEvent.on('pointerout',function(pointer){
            backEvent.setAlpha(1);
        })

        //Top Bar, Date
        const scroll = this.add.image(5.25 * screenWidth/7, 1/20 * screenHeight, "Scroll").setOrigin(0).setScale(screenWidth / (561 * 4), screenHeight / (400 * 12));
        const scrollTextStyle = { font: "18px Arial", fill: "#000", wordWrap: true, wordWrapWidth: scroll.width, align: "center" };
        const textTwo = this.add.text(5.45 * screenWidth/7, 1/14 * screenHeight, "PlaceholderText, Day 322", scrollTextStyle);

        //Compass
        this.add.image(screenWidth*0.93, screenHeight*0.85, "compass").setScale(0.5)

        //ETA
        this.add.image(screenWidth*0.73, screenHeight*0.858, "pirateScroll").setScale(0.6)

        var font = { font: '18px Arial', fill: "#000", wordWrap: true, wordWrapWidth: scroll.width, align: "center" };

        var text = this.add.text(screenWidth/1150*738, screenHeight/555*464, "Estimated Date to Arrival", font)

        //Morale Bar
        this.add.image(screenWidth*0.45, screenHeight*0.858, "pirateScroll").setScale(0.6)

        var font = { font: '18px Arial', fill: "#000", wordWrap: true, wordWrapWidth: scroll.width, align: "center" };

        var text = this.add.text(screenWidth/1150*420, screenHeight/555*464, "Morale: 1700/3000", font)

    }
    
    update() {
        
    }
}