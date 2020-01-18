class Port extends Phaser.Scene {
    constructor() {
        super("Port");
        this.assets = {};
        this.faded = false;
    }

    setFader(x) {
        let _this = this;
        x.on("pointerdown", function(pointer) {
            _this.faded = !_this.faded;
            if (_this.faded) {
                _this.fadeAssets(0.5);
            } else {
                _this.fadeAssets(1);
            }
        });
    }

    fadeAssets(x) {
        for (let value of Object.values(this.assets)) {
                value.setAlpha(x);
        }
    }

    preload() {
        this.load.image("Sand", '../assets/sand.jpg');
        this.load.image("Dock", '../assets/dock.png');
        this.load.image("Tavern",'../assets/tavern.png');
        this.load.image("Marketplace", '../assets/marketplace.png');
        this.load.image("Cart", '../assets/cart.png');
        this.load.image("Stall", '../assets/stall.png');
        this.load.image("Ship", '../assets/ship2.png');
    }

    create() {
        const _this = this;

        //Sand bg
        const sand = this.add.image(0, 0, "Sand").setOrigin(0).setScale((screenWidth / (906)) * 0.8 , screenHeight / (604));
        this.assets.sand = sand;
        this.setFader(sand);
        
        //Docks
        let dockOne;
        let dockTwo;
        let dockThree;
        let dockFour;

        let docks = [dockOne, dockTwo, dockThree, dockFour];
        docks.map((ele, i) => {
            ele = this.add.image(3 * screenWidth / 4, 0 + (325 * screenHeight / (324 * 4) * i), "Dock").setOrigin(0).setScale((screenWidth / (264 * 14)) , screenHeight / (324 * 4));
            this.assets.ele = ele;
            console.log(Object.keys(this.assets).length);
            this.setFader(ele);
        })

        //Marketplace
        const marketplace = this.add.image(screenWidth/14, screenHeight/12, "Marketplace").setOrigin(0).setScale(screenWidth / (843 * 4), screenHeight / (766 * 3))
        .setInteractive();
        this.assets.marketplace = marketplace;
        this.setFader(marketplace);

        //Tavern
        const tavern = this.add.image(screenWidth/10, screenHeight/1.5, "Tavern").setOrigin(0).setScale(screenWidth / (695 * 4), screenHeight / (598*4))
        .setInteractive();
        this.assets.tavern = tavern;
        this.setFader(tavern);

        //Cart
        const cart = this.add.image(screenWidth/12, screenHeight/2.25, "Cart").setOrigin(0).setScale(screenWidth / (265 * 8), screenHeight / (171 * 8));
        this.assets.cart = cart;
        this.setFader(cart);
        
        //Stall
        const stall = this.add.image(screenWidth/3.2, screenHeight/3, "Stall").setOrigin(0).setScale(screenWidth / (219 * 8), screenHeight / (145 * 8));
        this.assets.stall = stall;
        this.setFader(stall);

        //Ship
        const ship = this.add.image(screenWidth/1.2, screenHeight/12, "Ship").setOrigin(0).setScale(screenWidth / (319 * 8), screenHeight / (1091 * 1.25))
        .setInteractive();
        this.assets.ship = ship;
        this.setFader(ship);
    }

    update() {

    }
}