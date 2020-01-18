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

        //Next button
        var nextEvent = this.add.image(screenWidth*0.8, screenHeight*0.85, "nextBtn", font).setInteractive().on('pointerdown', function (pointer) {
            this.scene.scene.start("Port")
        })

        nextEvent.on('pointerover',function(pointer){
            nextEvent.setAlpha(0.75);
        })

        nextEvent.on('pointerout',function(pointer){
            nextEvent.setAlpha(1);
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