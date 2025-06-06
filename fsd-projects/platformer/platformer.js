$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
//platforms

createPlatform(300, 605, 50, 5, "hotpink");
createPlatform(600, 450, 50, 5, "hotpink");
createPlatform(850, 350, 50, 5, "hotpink");
createPlatform(1100, 290, 50, 5, "hotpink")
createPlatform(700, 150, 260, 5, "hotpink")

//barriers

createPlatform(400, 500, 50, 250, "hotpink");
createPlatform(400, 1, 50, 350, "hotpink");

// collectable table

createPlatform(800, 125, 45, 5, "hotpink");

    // TODO 3 - Create Collectables

createCollectable("dipsy",400,435, 0, 0)
createCollectable("dipsy",850,285, 0, 0)
createCollectable("dipsy",800,65, 0, 0)

// i made my own collectable ;//
    
    // TODO 4 - Create Cannons

createCannon("top", 550, 1700);
createCannon("right", 750, 1000);
createCannon("right", 250, 2000 )
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
