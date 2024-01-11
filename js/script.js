window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();
  }

  function restartGame() {
    location.reload();
  }

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();
      switch (key) {
        case "ArrowLeft":
          console.log("pressed LEFT");
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          console.log("pressed UP");
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          console.log("pressed RIGHT");
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          console.log("pressed DOWN");
          game.player.directionY = 1;
          break;
      }
    }
  }

  window.addEventListener("keydown", handleKeydown);
};
