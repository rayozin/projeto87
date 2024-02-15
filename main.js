let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");
let color = "blue";
let largura = 2;

let mouseX;
let mouseY;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=largura;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=largura;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=largura;
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=largura;
ctx.arc(250,235,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=largura;
ctx.arc(350,235,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", cliquei);

function cliquei(e){
    color = document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    desenharcirculo(mouseX,mouseY);
}

function desenharcirculo(mouseX, mouseY){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=largura;
    ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
    ctx.stroke();
}

function limpar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}