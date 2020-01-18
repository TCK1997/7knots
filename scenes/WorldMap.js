var curve;
var path;
var pathSize;
var graphics;
var size;
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
        var currentLocation;
        var futureLocation;
        curve = new Phaser.Curves.Line(new Phaser.Math.Vector2(160, 91), new Phaser.Math.Vector2(1726, 286));

        this.add.image(0, 0, 'gameMap').setOrigin(0).setScale( screenWidth / 1326, screenHeight / 1013);
    
        var gameMapEvent = this.add.image(0, 0, 'gameMap').setOrigin(0).setScale( screenWidth / 1326, screenHeight / 1013).setInteractive().on('pointerdown', function (pointer) {
            if ((pointer.x < 95 && pointer.y < 240) && (pointer.y > 200)) {
                console.log(1)
                currentLocation = getLocation();
                futureLocation = 1;
                setLocation(1);

                this.scene.scene.start("Port") //1. Cidade
                
            } else if ((pointer.x < screenWidth/980*437 && pointer.y < screenHeight/816*460) && (pointer.x > screenWidth/980*360 && pointer.y > screenHeight/816*437)) {
                console.log(2)
                currentLocation = getLocation();
                futureLocation = 2;
                setLocation(2);
                this.scene.scene.start("Port") //2. Mombasa
            } else if ((pointer.x < screenWidth/980*567 && pointer.y < screenHeight/816*343) && (pointer.x > screenWidth/980*500 && pointer.y > screenHeight/816*322)) {
                currentLocation = getLocation();
                futureLocation = 3;
                setLocation(3);
                this.scene.scene.start("Port") //3. Socotra
            } else if ((pointer.x < screenWidth/980*660 && pointer.y < screenHeight/816*340) && (pointer.x > screenWidth/980*614 && pointer.y > screenHeight/816*312)) {
                currentLocation = getLocation();
                futureLocation = 4;
                setLocation(4);
                this.scene.scene.start("Port") //4. Goa
            } else if ((pointer.x < screenWidth/980*670 && pointer.y < screenHeight/816*368) && (pointer.x > screenWidth/980*610 && pointer.y > screenHeight/816*345)) {
                currentLocation = getLocation();
                futureLocation = 5;
                setLocation(5);
                this.scene.scene.start("Port") //5. Calicut
            } else if ((pointer.x < screenWidth/980*708 && pointer.y < screenHeight/816*410) && (pointer.x > screenWidth/980*656 && pointer.y > screenHeight/816*374)) {
                currentLocation = getLocation();
                futureLocation = 6;
                setLocation(6);
                this.scene.scene.start("Port") //6. Colombo
            } else if ((pointer.x < screenWidth/980*890 && pointer.y < screenHeight/816*424) && (pointer.x > screenWidth/980*824 && pointer.y > screenHeight/816*406)) {
                currentLocation = getLocation();
                futureLocation = 7;
                setLocation(7);
                this.scene.scene.start("Port") //7. Malacca
            } else if ((pointer.x < screenWidth/980*974 && pointer.y < screenHeight/816*513) && (pointer.x > screenWidth/980*916 && pointer.y > screenHeight/816*479)) {
                currentLocation = getLocation();
                futureLocation = 8;
                setLocation(8);
                this.scene.scene.start("Port") //8. Makassar
            } else if ((pointer.x < screenWidth/980*935 && pointer.y < screenHeight/816*239) && (pointer.x > screenWidth/980*890 && pointer.y > screenHeight/816*200)) {
                currentLocation = getLocation();
                futureLocation = 9;
                setLocation(9);
                this.scene.scene.start("Port") //9. Canton
            } else if ((pointer.x < screenWidth/980*130 && pointer.y < screenHeight/816*85) && (pointer.x > screenWidth/980*75 && pointer.y > screenHeight/816*67)) {
                currentLocation = getLocation();
                futureLocation = 0;
                setLocation(0);
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


        

        graphics = this.add.graphics();

        path = { t: 0, vec: new Phaser.Math.Vector2() };
        pathSize = { t: 0, vec: new Phaser.Math.Vector2() };
        

        this.tweens.add({
            targets: path,
            t: 1,
            ease: 'Linear',
            duration: 4000,
            yoyo: false,
            repeat: 0
        });

        
        this.tweens.add({
            targets: pathSize,
            t: 1,
            ease: 'Linear',
            duration: 2000,
            yoyo: true,
            repeat: 0
        })
    }
    
    update() {

        graphics.clear();
        graphics.lineStyle(1, 0xffffff, 1);
        curve.getPoint(path.t, path.vec);

        graphics.fillStyle(0xff0000, 1);
        graphics.fillCircle(path.vec.x, path.vec.y, pathSize.t * 50 + 5);
    }
}