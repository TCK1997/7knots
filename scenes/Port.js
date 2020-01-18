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

  setFader(x, category) {
    let _this = this;
    x.on("pointerdown", function(pointer) {
      _this.faded = !_this.faded;
      if (_this.faded) {
        _this.fadeAssets(0.5);
        _this.openTable(x, "marketplace");
      } else {
        _this.fadeAssets(1);
      }
    });
  }

  openTable(id, category) {
    const scroll = this.add.image((1 * screenWidth) / 4, (1 / 10) * screenHeight, "Scroll")
    .setOrigin(0)
    .setScale(screenWidth / (561*2), screenHeight / (400 * 1.2));

    let arr;
    id = currState.location;

    let deleteArr = [];

    switch(category) {
      case "marketplace":
        arr = getResources(id);
        let resourcePriceArr = ["Good" + " Buy/Sell "];
        
        for (let i = 0; i < arr.length; i++) {
          resourcePriceArr.push( arr[i] + " " + getPrice(id, arr[i]));
        }

        for (let j = 0; j < resourcePriceArr.length; j++) {
          const ListTextStyle = {
            font: "18px Arial",
            fill: "#000",
            wordWrap: true,
            wordWrapWidth: scroll.width,
            align: "center"
          };

          deleteArr.push(this.add.text((1 * screenWidth) / 3,  (2 * j / 15) * screenHeight + (screenHeight/4), resourcePriceArr[j] , ListTextStyle));
        }
        break;
    }

    setTimeout(function() { 
      deleteArr.map(v => v.destroy());
      scroll.destroy();
    }, 3000);
  }

  preload() {
    this.load.image("Sand", "../assets/sand.jpg");
    this.load.image("Dock", "../assets/dock.png");
    this.load.image("Tavern", "../assets/tavern.png");
    this.load.image("Marketplace", "../assets/marketplace.png");
    this.load.image("Cart", "../assets/cart.png");
    this.load.image("Stall", "../assets/stall.png");
    this.load.image("Ship", "../assets/ship2.png");
    this.load.image("Sea", "../assets/sea.png");
    this.load.image("TreeOne", "../assets/tree_1.png");
    this.load.image("TreeTwo", "../assets/tree_2.png");
    this.load.image("Sign", "../assets/sign.png");
    this.load.image("Scroll", "../assets/pirateBox.png");
    this.load.image("pirateScroll", "../assets/pirateScroll.png");
  }

  create() {
    portNameAPI = toName(getLocation);

    const _this = this;

    //Sand bg
    const sand = this.add
      .image(0, 0, "Sand")
      .setOrigin(0)
      .setScale((screenWidth / 906) * 0.8, screenHeight / 604);
    this.assets.sand = sand;

    //Sea
    const sea = this.add
      .image((3 * screenWidth) / 4, 0, "Sea")
      .setOrigin(0)
      .setScale(screenWidth / (264 * 8), screenHeight / (324 * 2));
    this.assets.sea = sea;

    //Docks
    let dockOne = this.add
      .image(
        (3 * screenWidth) / 4,
        0 + ((325 * screenHeight) / (324 * 4)) * 0,
        "Dock"
      )
      .setOrigin(0)
      .setScale(screenWidth / (264 * 14), screenHeight / (324 * 4));
    this.assets.dockOne = dockOne;

    let dockTwo = this.add
      .image(
        (3 * screenWidth) / 4,
        0 + ((325 * screenHeight) / (324 * 4)) * 1,
        "Dock"
      )
      .setOrigin(0)
      .setScale(screenWidth / (264 * 14), screenHeight / (324 * 4));
    this.assets.dockTwo = dockTwo;

    let dockThree = this.add
      .image(
        (3 * screenWidth) / 4,
        0 + ((325 * screenHeight) / (324 * 4)) * 2,
        "Dock"
      )
      .setOrigin(0)
      .setScale(screenWidth / (264 * 14), screenHeight / (324 * 4));
    this.assets.dockThree = dockThree;

    let dockFour = this.add
      .image(
        (3 * screenWidth) / 4,
        0 + ((325 * screenHeight) / (324 * 4)) * 3,
        "Dock"
      )
      .setOrigin(0)
      .setScale(screenWidth / (264 * 14), screenHeight / (324 * 4));
    this.assets.dockFour = dockFour;

    //Trees
    const treeOne = this.add
      .image((4 * screenWidth) / 7, screenHeight / 12, "TreeOne")
      .setOrigin(0)
      .setScale(screenWidth / (355 * 10), screenHeight / (620 * 4));
    const treeTwo = this.add
      .image((3 * screenWidth) / 7, (8 * screenHeight) / 12, "TreeTwo")
      .setOrigin(0)
      .setScale(screenWidth / (355 * 10), screenHeight / (620 * 4));

    //Marketplace
    const marketplace = this.add
      .image(screenWidth / 14, screenHeight / 12, "Marketplace")
      .setOrigin(0)
      .setScale(screenWidth / (843 * 4), screenHeight / (766 * 3))
      .setInteractive();
    this.assets.marketplace = marketplace;
    this.setFader(marketplace, "marketplace");

    //Tavern
    const tavern = this.add
      .image(screenWidth / 10, screenHeight / 1.5, "Tavern")
      .setOrigin(0)
      .setScale(screenWidth / (695 * 4), screenHeight / (598 * 4))
      .setInteractive();
    this.assets.tavern = tavern;
    this.setFader(tavern, "tavern");

    //Cart
    const cart = this.add
      .image(screenWidth / 12, screenHeight / 2.25, "Cart")
      .setOrigin(0)
      .setScale(screenWidth / (265 * 8), screenHeight / (171 * 8));
    this.assets.cart = cart;

    //Stall
    const stall = this.add
      .image(screenWidth / 3.2, screenHeight / 3, "Stall")
      .setOrigin(0)
      .setScale(screenWidth / (219 * 8), screenHeight / (145 * 8));
    this.assets.stall = stall;

    //Ship
    const ship = this.add
      .image(screenWidth / 1.2, (2 * screenHeight) / 12, "Ship")
      .setOrigin(0)
      .setScale(screenWidth / (319 * 8), screenHeight / (1091 * 1.25))
      .setInteractive();
    this.assets.ship = ship;
    this.setFader(ship, "ship");

    //Sign
    const sign = this.add
      .image((4.25 * screenWidth) / 7, (1 / 2) * screenHeight, "Sign")
      .setOrigin(0)
      .setScale(screenWidth / (319 * 5), screenHeight / (189 * 6))
      .setInteractive();
    this.assets.sign = sign;

    sign.on("pointerdown", function(pointer) {
      this.scene.scene.start("WorldMap");
    });
    const signTextStyle = {
      font: "18px Arial",
      wordWrap: true,
      wordWrapWidth: sign.width,
      align: "center"
    };
    const text = this.add.text(
      (4.35 * screenWidth) / 7,
      (6.5 / 12) * screenHeight,
      "SET SAIL",
      signTextStyle
    );
    this.assets.text = text;

    //Scroll
    const scroll = this.add
      .image((5.25 * screenWidth) / 7, (1 / 20) * screenHeight, "Scroll")
      .setOrigin(0)
      .setScale(screenWidth / (561 * 4), screenHeight / (400 * 12));
    const scrollTextStyle = {
      font: "18px Arial",
      fill: "#000",
      wordWrap: true,
      wordWrapWidth: scroll.width,
      align: "center"
    };
    const textTwo = this.add.text(
      (5.45 * screenWidth) / 7,
      (1 / 14) * screenHeight,
      toName(getLocation()) + ", Day " + getDay(),
      scrollTextStyle
    );

    //portName, Top Bar
    const pirateScroll = this.add.image(screenWidth*0.32, screenHeight*0.04, "pirateScroll").setOrigin(0).setScale(0.6);
    const pirateScrollTextStyle = { font: "22px Arial", fill: "#000", wordWrap: true, wordWrapWidth: scroll.width, align: "center" };
    const portName = this.add.text(screenWidth*0.4, screenHeight*0.085, portNameAPI, pirateScrollTextStyle);

  }

  

  update() {}
}
