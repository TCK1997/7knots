var curve;
var path;
var pathSize;
var graphics;
var loop = 0;

class WorldMap extends Phaser.Scene {
    
    constructor() {
        super("WorldMap");
    }

    preload() {
        this.load.image('gameMap', '../assets/gameMap.png')
        this.load.image('backBtn', '../assets/buttons/backBtn.png')
        this.load.image('compass', '../assets/compass.png')
        this.load.image('pirateScroll', '../assets/pirateScroll.png')
        this.load.image('nextBtn', '../assets/buttons/nextBtn.png')
        this.load.image('caravel', '../assets/caravel.png')
    }
    
    create() {
        if (loop) {
            if(getMorale() < (50 - (getMotivation() * 6))) {
                this.scene.start("GameOver")
            }
            else if (days > 0){
                this.scene.start("SeaEvent")
            } else {
                loop = 0;
                this.scene.start("Port")
            }
        }
        
        var currentLocation;
        var futureLocation;
        
        this.add.image(0, 0, 'gameMap').setOrigin(0).setScale( screenWidth / 1326, screenHeight / 1013);

        var gameMapEvent = this.add.image(0, 0, 'gameMap').setOrigin(0).setScale( screenWidth / 1326, screenHeight / 1013).setInteractive().on('pointerdown', function (pointer) {
            console.log(pointer.x)
            console.log(pointer.y)
            if ((pointer.x < screenWidth/980*75 && pointer.y < screenHeight/816*338) && (pointer.y > screenHeight/816*297)) {
                currentLocation = getLocation();
                futureLocation = 1;
                console.log(currentLocation, futureLocation)
                days = calculateDays(currentLocation, futureLocation);
                console.log(days);
                setLocation(1);
                loop = 1;
                this.scene.scene.start("SeaEvent") //1. Cidade
            } else if ((pointer.x < screenWidth/980*437 && pointer.y < screenHeight/816*460) && (pointer.x > screenWidth/980*360 && pointer.y > screenHeight/816*437)) {
                currentLocation = getLocation();
                futureLocation = 2;
                console.log(currentLocation, futureLocation)
                days = calculateDays(currentLocation, futureLocation);
                setLocation(2);
                loop = 1;
                this.scene.scene.start("SeaEvent") //2. Mombasa
            } else if ((pointer.x < screenWidth/980*567 && pointer.y < screenHeight/816*343) && (pointer.x > screenWidth/980*500 && pointer.y > screenHeight/816*322)) {
                currentLocation = getLocation();
                futureLocation = 3;
                console.log(currentLocation, futureLocation)
                days = calculateDays(currentLocation, futureLocation);
                setLocation(3);
                loop = 1;
                this.scene.scene.start("SeaEvent") //3. Socotra
            } else if ((pointer.x < screenWidth/980*670 && pointer.y < screenHeight/816*368) && (pointer.x > screenWidth/980*610 && pointer.y > screenHeight/816*345)) {
                currentLocation = getLocation();
                futureLocation = 4;
                console.log(currentLocation, futureLocation)
                days = calculateDays(currentLocation, futureLocation);
                setLocation(4);
                loop = 1;
                this.scene.scene.start("SeaEvent") //4. Calicut
            } else if ((pointer.x < screenWidth/980*660 && pointer.y < screenHeight/816*340) && (pointer.x > screenWidth/980*614 && pointer.y > screenHeight/816*312)) {
                currentLocation = getLocation();
                futureLocation = 5;
                console.log(currentLocation, futureLocation)
                days = calculateDays(currentLocation, futureLocation);
                setLocation(5);
                loop = 1;
                this.scene.scene.start("SeaEvent") //5. Goa

            } else if ((pointer.x < screenWidth/980*708 && pointer.y < screenHeight/816*410) && (pointer.x > screenWidth/980*656 && pointer.y > screenHeight/816*374)) {
                currentLocation = getLocation();
                futureLocation = 6;
                console.log(currentLocation, futureLocation)
                days = calculateDays(currentLocation, futureLocation);
                setLocation(6);
                loop = 1;
                this.scene.scene.start("SeaEvent") //6. Colombo
            } else if ((pointer.x < screenWidth/980*890 && pointer.y < screenHeight/816*424) && (pointer.x > screenWidth/980*824 && pointer.y > screenHeight/816*406)) {
                currentLocation = getLocation();
                futureLocation = 7;
                console.log(currentLocation, futureLocation)
                days = calculateDays(currentLocation, futureLocation);
                setLocation(7);
                loop = 1;
                this.scene.scene.start("SeaEvent") //7. Malacca
            } else if ((pointer.x < screenWidth/980*974 && pointer.y < screenHeight/816*513) && (pointer.x > screenWidth/980*916 && pointer.y > screenHeight/816*479)) {
                currentLocation = getLocation();
                futureLocation = 8;
                console.log(currentLocation, futureLocation)
                days = calculateDays(currentLocation, futureLocation);
                setLocation(8);
                loop = 1;
                this.scene.scene.start("SeaEvent") //8. Makassar
            } else if ((pointer.x < screenWidth/980*935 && pointer.y < screenHeight/816*239) && (pointer.x > screenWidth/980*890 && pointer.y > screenHeight/816*200)) {
                currentLocation = getLocation();
                futureLocation = 9;
                console.log(currentLocation, futureLocation)
                days = calculateDays(currentLocation, futureLocation);
                setLocation(9);
                loop = 1;
                this.scene.scene.start("SeaEvent") //9. Canton
            } else if ((pointer.x < screenWidth/980*130 && pointer.y < screenHeight/816*85) && (pointer.x > screenWidth/980*75 && pointer.y > screenHeight/816*67)) {
                currentLocation = getLocation();
                futureLocation = 0;
                console.log(currentLocation, futureLocation)
                days = calculateDays(currentLocation, futureLocation);
                setLocation(0);
                loop = 1;
                this.scene.scene.start("SeaEvent") //0. Lisbon
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

        //Compass
        this.add.image(screenWidth*0.93, screenHeight*0.85, "compass").setScale(0.5)

        
        //ETA
        this.add.image(screenWidth*0.73, screenHeight*0.858, "pirateScroll").setScale(0.6)

        
        //Morale Bar
        this.add.image(screenWidth*0.45, screenHeight*0.858, "pirateScroll").setScale(0.6)

        //var font = { font: '18px Arial', fill: "#000", wordWrap: true, wordWrapWidth: scroll.width, align: "center" };

        //var text = this.add.text(screenWidth/1150*420, screenHeight/555*464, "Morale: 1700/3000", font)

    }
    
    update() {

        //Top Bar, Date
        const scroll = this.add.image(5.25 * screenWidth/7, 1/20 * screenHeight, "Scroll").setOrigin(0).setScale(screenWidth / (561 * 4), screenHeight / (400 * 12));
        const scrollTextStyle = { font: "18px Arial", fill: "#000", wordWrap: true, wordWrapWidth: scroll.width, align: "center" };
        const textTwo = this.add.text(5.45 * screenWidth/7, 1/14 * screenHeight, toName(getLocation()) + ", Day " + getDay(), scrollTextStyle);
        
        
        //ETA text
        // var font = { font: '18px Arial', fill: "#000", wordWrap: true, wordWrapWidth: scroll.width, align: "center" };
        const etaText = this.add.text(screenWidth/1150*738, screenHeight/555*464, "Estimated Date to Arrival", scrollTextStyle)

        //Morale text
        const moraleText = this.add.text(screenWidth/1130*420, screenHeight/555*464, "Morale: " + getMorale() + "% / 100%", scrollTextStyle)
    }
}