const canvas=document.querySelector(".canvas")
const ctx=canvas.getContext("2d")
console.log(ctx)
 
//lats divide our canvas into 10 by 10 small squars
const scale=20;
const rows=canvas.height/scale; //25
const columns=canvas.width/scale; //25

// now we need an array to save the bodies of our snake

let snake =[];
snake[0]={
    x:(Math.floor(Math.random()*columns)) * scale,
    y:0
}

ctx.fillStyle="#fff"
ctx.strokeStyle="pink";
ctx.fillRect(10,10,scale,scale);
ctx.strokeRect(10,10,scale,scale);