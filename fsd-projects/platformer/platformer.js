$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.addEventListener("click", killPlayer);
  if (document.readyState === "complete") {
    loadJson();
  } else {
    window.addEventListener("load", loadJson, { once: true });
  }

  function killPlayer() {
    if (
      player.deadAndDeathAnimationDone ||
      currentAnimationType === animationTypes.frontDeath
    ) {
      return;
    }
    playDeathSound();
    currentAnimationType = animationTypes.frontDeath;
    frameIndex = 0;
  }

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      walkingPlayerImage = document.getElementById("walking-player");
      standingPlayerImage = document.getElementById("standing-player");
      jumpPlayerImage = document.getElementById("jump-player");
      deathPlayerImage = document.getElementById("death-player");
      deathSound = document.getElementById("death-sound");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(300, 650, 50, 20);
    createPlatform(300, 540, 50, 20);
    createPlatform(350, 430, 10, 220);
    createPlatform(300, 430, 50, 20);
    createPlatform(400, 320, 100, 20);
    createPlatform(650, 430, 10, 220);
    createPlatform(850, 430, 10, 220);
    createPlatform(1000, 320, 100, 20);
    createPlatform(1200, 200, 100, 20);
    createPlatform(1200, 90, 100, 20);
    createPlatform(650, 150, 10, 120);
    createBadPlatform(360, 500, 290, 20, "red");
    createBadPlatform(660, 500, 190, 20, "red");
    createBadPlatform(860, 500, 550, 20, "red");
    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 50);
    createCollectable("diamond", 200, 170, 0.5, 0.7);

    // TODO 4 - Create Cannons
    createCannon("top", 200, 500);
    createCannon("right", 450, 1000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
