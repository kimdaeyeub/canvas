const circle = document.querySelector(".circle");

function onMove(event) {
  let x = event.clientX;
  let y = event.clientY;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
}

document.addEventListener("mousemove", onMove);
