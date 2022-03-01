const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// function cir() {
//   ctx.fillStyle = 'white'
//   ctx.fillRect = (0, 0, canvas.width, canvas.height)
// }



function circle(x, y, c ) {

  ctx.fillStyle = c;
  ctx.beginPath();
  ctx.arc(x-40, y-40, 50, 0, 2 * Math.PI);
  ctx.fill();
}

canvas.onmousemove = function (event) {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  circle(event.x,event.y, "blue")
  circle(event.x+80,event.y+100, 'yellow');
  circle(event.x-80,event.y-100, 'yellow');
 
}
// setInterval(() => {

//   ctx.fillStyle = 'white'
//   ctx.fillRect = (0, 0, canvas.width, canvas.height)

//   setTimeout(() => {
//     circle(400, 100, 'red');
//   }, 1000)
//   setTimeout(() => {
//     circle(400, 300, 'yellow');
//   }, 2000)
//   setTimeout(() => {
//     circle(400, 500, 'green');
//   }, 3000)

// }, 6000)

