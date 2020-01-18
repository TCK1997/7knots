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
        this.load.image('nextBtn', '../assets/buttons/nextBtn.png')
        this.load.image('caravel', '../assets/caravel.png')
    }
    
    create() {
        curve = new Phaser.Curves.Line(new Phaser.Math.Vector2(160, 91), new Phaser.Math.Vector2(1726, 286));

        this.add.image(0, 0, 'gameMap').setOrigin(0).setScale( screenWidth / 1326, screenHeight / 1013);
    
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
            }
        })

        var font = { font: '24px Arial' };

        var text = this.add.text(60, 60, "Map here", font)

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

        //Rounded rectangle
        // var graphics = this.add.graphics();

        // graphics.fillStyle(0xffff00, 1);

        // //  32px radius on the corners
        // graphics.fillRoundedRect(32, 32, 300, 200, 32);
    
        // graphics.fillStyle(0xff00ff, 1);
    
        // //  Using an object to define a different radius per corner
        // graphics.fillRoundedRect(360, 240, 400, 300, { tl: 64, tr: 22, bl: 12, br: 0 });

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