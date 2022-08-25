const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gamespeed = 15;

const backLayer1 = new Image();
backLayer1.src = './bg/layer-1.png';
const backLayer2 = new Image();
backLayer2.src = './bg/layer-2.png';
const backLayer3 = new Image();
backLayer3.src = './bg/layer-3.png';
const backLayer4 = new Image();
backLayer4.src = './bg/layer-4.png';
const backLayer5 = new Image();
backLayer5.src = './bg/layer-5.png';

let x = 0;
let x2 = 2400;

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backLayer4, x, 0);
  ctx.drawImage(backLayer4, x2, 0);
  if (x < -2400) x = 2400 + x2 - gamespeed;
  else x -=gamespeed;
  if (x2 < -2400) x2 = 2400 + x - gamespeed;
  else x2-= gamespeed;
  requestAnimationFrame(animate);
}
animate();
