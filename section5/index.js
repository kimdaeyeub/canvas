/**@type {HTMLCanvasElement} */
const canvas = document.querySelector(".canvas");

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Root {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 7 + 5;
    this.size = Math.random() * 1 + 2;
    this.angle = Math.random() * 6.2;
  }

  update() {
    this.x += this.speedX + Math.sin(this.angle);
    this.y += this.speedY;
    this.size += 0.1;
    if (this.size < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = "hsl(140,100%,50%)";
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

window.addEventListener("mousemove", (e) => {
  const root = new Root(e.x, e.y);
  root.update();
});
