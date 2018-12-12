var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0,0,400,400);
ctx.beginPath();
ctx.moveTo(140,160);
ctx.quadraticCurveTo(200,40,260,160);
ctx.fillStyle="#ffffff"
ctx.fill();
ctx.beginPath();
ctx.moveTo(40,200);
ctx.quadraticCurveTo(200,100,360,200);
ctx.fillStyle="#e0e1f3"
ctx.fill();
ctx.beginPath();
ctx.moveTo(40,200);
ctx.quadraticCurveTo(200,300,360,200);
ctx.fillStyle="#e0e1f3"
ctx.fill();
