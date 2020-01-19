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
                .setScale(screenWidth/1920, screenHeight/1920);
            gameName = this.add.text(screenWidth*0.1,screenHeight*0.1 ,  'Storm is brewing, you lost 7 days at sea', scrollTextStyle);
        } else if (dice == 62) {
            event = 3;
            console.log("you got scurvy haha");
            scurvy();
            sea = this.add
                .image(0, 0, 'scurvy')
                .setOrigin(0)
                .setScale(screenWidth/1920, screenHeight/1920);
            gameName = this.add.text(screenWidth*0.1,screenHeight*0.1 ,  'A member of your crew succumb to scurvy.', scrollTextStyle);
        } else if (dice == 61) {
            event = 2;
            console.log("You get attack by pirates...");
            pirate();
        } else {
            event = 4;
            console.log("nothing happen");
            sea = this.add
                .image(0, 0, 'nothing')
                .setOrigin(0)
                .setScale(screenWidth/1920, screenHeight/1920);
            gameName = this.add.text(screenWidth*0.1,screenHeight*0.1 ,  'Nothing happened.', scrollTextStyle);
        }
        var continueEvent = this.add.image(screenWidth*0.8, screenHeight*0.44, "continueBtn", font).setInteractive().on('pointerdown', function (pointer) {
            this.scene.scene.start("WorldMap");
        })
    }

    update() {
    }
}