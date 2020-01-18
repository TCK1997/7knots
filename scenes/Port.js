class Port extends Phaser.Scene {
    constructor() {
        super("Port");
        this.assets = {};
    }

    setFader(x) {
        let _this = this;
        x.on("pointerdown", function(pointer) {
            _this.fadeAssets(0.5);
        });
    }

    fadeAssets(x) {
        for (let value of Object.values(this.assets)) {
            value.setAlpha(x);
        }
    }

    preload() {
        this.load.image("Tavern",'../assets/tavern.png');
        this.load.image("Marketplace", '../assets/marketplace.png');
        this.load.image("Cart", '../assets/cart.png');
        this.load.image("Stall", '../assets/stall.png');
    }

    create() {
        const _this = this;
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
    }

    update() {
    }
}