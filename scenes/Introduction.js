class Introduction extends Phaser.Scene {
  constructor() {
    super("Introduction");
  }

  preload() {
    this.load.image("backBtn", "../assets/buttons/backBtn.png");
    this.load.image("nextBtn", "../assets/buttons/nextBtn.png");
  }

  create() {
    var font = { font: "24px Arial" };

    var style = {
      font: "24px Arial",
      wordWrap: { width: screenWidth * 0.8, useAdvancedWrap: true }
    };

    var text = this.add.text(60, 60, introductionText, style);

    //Back button
    var backEvent = this.add
      .image(screenWidth * 0.08, screenHeight * 0.92, "backBtn", font)
      .setInteractive()
      .on("pointerdown", function(pointer) {
        this.scene.scene.start("MainMenu");
      });

    backEvent.on("pointerover", function(pointer) {
      backEvent.setAlpha(0.75);
    });

    backEvent.on("pointerout", function(pointer) {
      backEvent.setAlpha(1);
    });

    //Next button
    var nextEvent = this.add
      .image(screenWidth * 0.9, screenHeight * 0.92, "nextBtn", font)
      .setInteractive()
      .on("pointerdown", function(pointer) {
        this.scene.scene.start("WorldMap");
      });

    nextEvent.on("pointerover", function(pointer) {
      nextEvent.setAlpha(0.75);
    });

    nextEvent.on("pointerout", function(pointer) {
      nextEvent.setAlpha(1);
    });
  }

  update() {}
}
