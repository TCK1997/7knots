var event;
class SeaEvent extends Phaser.Scene {
    constructor() {
        super("SeaEvent");
    }

    preload() {
        this.load.image('storm', '../assets/storm.jpg')
        this.load.image('pirate', '../assets/pirate.jpg')
        this.load.image('scurvy', '../assets/scurvy.jpg')
        this.load.image('nothing', '../assets/nothing.jpg')
        this.load.image('continueBtn', '../assets/buttons/continueBtn.png')
        this.load.image('pirateScroll', '../assets/pirateScroll.png')
    }
    
    create() {
        var scrollTextStyle = { font: "18px Arial", fill: "#000", wordWrap: true, wordWrapWidth: scroll.width, align: "center" };;
        var sea;
        var gameName;
        days--;
        var font = { font: '50px Arial' };
        addDay(1);
        decreaseMorale(1);
        var dice = rollOceanEvent();
        console.log("dice =", dice)
        if(63 < dice && dice < 80) {
            event = 1;
            stormEvent();
            console.log(storm)
            sea = this.add
                .image(0, 0, 'storm')
                .setOrigin(0)
                .setScale(screenWidth/1920 * 3, screenHeight/1920 * 3);
            gameName = this.add.text(screenWidth*0.1,screenHeight*0.1 ,  'Storm is brewing, you lost 7 days at sea', scrollTextStyle);
        } else if (dice == 62) {
            event = 3;
            console.log("you got scurvy haha");
            scurvy();
            sea = this.add
                .image(0, 0, 'scurvy')
                .setOrigin(0)
                .setScale(screenWidth/1920 * 2, screenHeight/1920 * 2);
            gameName = this.add.text(screenWidth*0.1,screenHeight*0.1 ,  'A member of your crew succumb to scurvy.', scrollTextStyle);
        } else if (dice == 61) {
            event = 2;
            console.log("You get attack by pirates...");
            pirate();
            sea = this.add
                .image(0, 0, 'pirate')
                .setOrigin(0)
                .setScale(screenWidth/1920 * 2, screenHeight/1920 * 2);
            gameName = this.add.text(screenWidth*0.1,screenHeight*0.1 ,  'You get attacked by pirates.', scrollTextStyle);
        } else {
            event = 4;
            console.log("nothing happen");
            sea = this.add
                .image(0, 0, 'nothing')
                .setOrigin(0)
                .setScale(screenWidth/1920 * 2, screenHeight/1920 * 2);
            gameName = this.add.text(screenWidth*0.1,screenHeight*0.1 ,  'Nothing happened.', scrollTextStyle);
        }
        var continueEvent = this.add.image(screenWidth*0.8, screenHeight*0.44, "continueBtn", font).setInteractive().on('pointerdown', function (pointer) {
            this.scene.scene.start("WorldMap");
        })
        this.add.image(screenWidth*0.45, screenHeight*0.858, "pirateScroll").setScale(0.6)
    }

    update() {
         //Top Bar, Date
         const scroll = this.add.image(5.25 * screenWidth/7, 1/20 * screenHeight, "Scroll").setOrigin(0).setScale(screenWidth / (561 * 4), screenHeight / (400 * 12));
         const scrollTextStyle = { font: "18px Arial", fill: "#000", wordWrap: true, wordWrapWidth: scroll.width, align: "center" };
         const textTwo = this.add.text(5.45 * screenWidth/7, 1/14 * screenHeight, toName(getLocation()) + ", Day " + getDay(), scrollTextStyle);
 
         //Morale text
         const moraleText = this.add.text(screenWidth/1130*420, screenHeight/555*464, "Morale: " + getMorale() + "% / 100%", scrollTextStyle)
    }
}