const canvas = document.querySelector("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext("2d");
let isPainting = false;
let degree = 0;

function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {
  var rot = (Math.PI / 2) * 3;
  var x = cx;
  var y = cy;
  var step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);

  for (var i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  if (degree === 2) {
    degree = 0;
  } else {
    degree += 0.05;
  }

  ctx.save();
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.rotate(Math.PI * degree);
  ctx.restore();
}

function drawStart() {
  isPainting = true;
}

function draw(event) {
  if (isPainting) {
    const num1 = Math.floor(Math.random() * 225);
    const num2 = Math.floor(Math.random() * 225);
    const num3 = Math.floor(Math.random() * 225);
    drawStar(
      event.offsetX,
      event.offsetY,
      5,
      70,
      30,
      `rgba(${num1},${num2},${num3}, 1)`
    );
  }
}

function drawEnd() {
  isPainting = false;
}

canvas.addEventListener("mousedown", drawStart);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", drawEnd);
