window.addEventListener("load", () => {
  // canvas setup
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  class inputHandler {
    constructor(game) {
      this.game = game;
      window.addEventListener("keydown", (e) => {
        if (
          (e.key == "ArrowUp" || e.key == "ArrowDown") &&
          this.game.keys.indexOf(e.key) === -1
        ) {
          this.game.keys.push(e.key);
        }
        console.log(this.game.keys);
      });

      window.addEventListener("keyup", (e) => {
        if (this.game.keys.indexOf(e.key) > -1) {
          this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
        }
      });
    }
  }
  class projectile {}
  class particle {}
  class player {
    constructor(game) {
      this.game = game;
      this.width = 120;
      this.height = 190;
      this.x = 20;
      this.y = 100;
      this.speedY = 0;
      this.maxSpeed = 3;
    }
    update() {
      if (this.game.keys.includes("ArrowUp")) this.speedY = -this.maxSpeed;
      else if (this.game.keys.includes("ArrowDown"))
        this.speedY = this.maxSpeed;
      else this.speedY = 0;
      this.y += this.speedY;
    }
    draw(context) {
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  class enemy {}
  class layer {}

  class background {}

  class UI {}
  class game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new player(this);
      this.input = new inputHandler(this);
      this.keys = [];
    }
    show() {
      console.log(this.player);
    }
    update() {
      this.player.update();
    }
    draw(context) {
      this.player.draw(context);
    }
  }
  const startGame = new game(canvas.width, canvas.height);
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    startGame.update();
    startGame.draw(ctx);
    requestAnimationFrame(animate);
  };
  animate();
});
