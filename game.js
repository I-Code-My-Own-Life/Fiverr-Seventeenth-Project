let canvas = document.getElementById("canvas");

// Setting canvas's width and height : 
canvas.width = innerWidth;
canvas.height = innerHeight;

// Our canvas context variable : 
let c = canvas.getContext("2d");

// Our arrow's Image : 
let arrowImage = new Image();
arrowImage.src = "Assets/arrow.png";
let arrowWidth = 70;
let arrowHeight = 20;
let arrowSpeed = 8;
let arrowUpImg = new Image();
arrowUpImg.src = "Assets/arrowUp.png";
// Our star image : 
let starImg = new Image();
starImg.src = "Assets/star.png";
// Our Background image : 
let background = new Image();
background.src = "Assets/background.png";
// Our mouse's x and y positions will be stored in this object : 
let mouse = {
    x:undefined,
    y:undefined
} 
// Our target's x and y coordinates will be stored in this target object :
let targetPos = {
    x:undefined,
    y:undefined
}
let angle = 0;
let angleForTarget = 0;
let arrows = [];
let arrowsLeft = [];
let seconds = 60;
let minutes = 4;
let stars = 0;
// Our Arrow : 
class Arrow{
    constructor({img,x,y,width,height,ammo}){
        this.img = img;
        this.x = x;
        this.y = y;
        this.width  = width;
        this.height = height;
        this.angleForTarget = 0;
        this.velocity = {
            x:0,
            y:0
        }
        this.gravity = 0.06;
        this.ammo = ammo;
    }
    shoot(){
        if(!this.ammo){
            c.save();
            c.translate(this.x,this.y);
            c.rotate(this.angleForTarget);
            c.drawImage(this.img,0,0,this.width,this.height);
            c.restore();
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            // Remove these lines if you want the arrow to go into the direction without falling down or tilting : 
            this.velocity.y += this.gravity;
            this.angleForTarget += this.gravity / 8;
        }
        else{
            c.drawImage(this.img,this.x,this.y,this.width,this.height);
        }
    }
}
let decrementGravity = false;
class Target{
    constructor({x,y,radius,color,i}){
        this.position = {
            x:x,
            y:y
        }
        this.radius = radius;
        this.color = color;
        this.i = i
    }
    update(){
        // Circle target : 
        if(this.i == 0){
            c.beginPath();
            c.fillStyle = this.color;
            c.save()
            c.translate(this.position.x,this.position.y);
            c.rotate(-1.59)
            c.arc(0,0,this.radius,0,Math.PI,false);
            c.fill();
            c.closePath();
            c.restore();
        }
        // Rectangle target : 
        else{
            c.fillStyle = this.color;
            c.fillRect(this.position.x,this.position.y - this.radius * 2 / 2,this.radius,this.radius * 2);
        }
    }

}

// Pushing ammos in the arrowsLeft array : 
let x = 50;
for(let i = 0; i < 5; i++){
    arrowsLeft.push(new Arrow({img:arrowUpImg,x:x,y:10,width:arrowHeight,height:arrowWidth,ammo:true}));
    x+= 30
}

let bullEye = new Target({x:800,y:300,radius:6,color:"red",i:1});
let middleTarget = new Target({x:798,y:300,radius:30,color:"blue",i:1});
let outerTarget = new Target({x:798,y:300,radius:50,color:"green",i:1});
function animate(){
    // Our background : 
    // c.fillStyle = "black";
    // c.fillRect(0,0,canvas.width,canvas.height);
    c.drawImage(background,0,0,canvas.width,canvas.height);
    // Our timer :
    c.fillStyle = "black"
    c.font = "40px MinecraftFont"
    c.fillText("Time Left --",canvas.width - 350,50);
    c.font = "40px MinecraftFont"
    c.fillText(`${minutes}:`,canvas.width - 130,50);
    c.font = "40px MinecraftFont"
    c.fillText(`${seconds}`,canvas.width - 100,50);
    // Drawing our star : 
    c.drawImage(starImg,canvas.width / 2 - 50,50,50,50);
    c.font = "40px MinecraftFont"
    c.fillText(`${stars}`,canvas.width / 2 - 40,35,50,50);
    // Displaying our target :
    outerTarget.update(); 
    middleTarget.update();
    bullEye.update();
    // Shooting arrows : 
    arrows.forEach((arrow) => {
        arrow.shoot();
        if(arrow.x > canvas.width || arrow.y > canvas.height){
            arrows.splice(arrows.indexOf(arrow),1);
        }
    });
    arrowsLeft.forEach((ammo) => {
        ammo.shoot();
    })
    // stars++;
    requestAnimationFrame(animate);
}

animate();

// Our resize event listener : 
window.addEventListener("resize",(e)=>{
    canvas.width = innerWidth;
    canvas.height = innerHeight;
})

addEventListener("mousemove",(e)=>{
    mouse.x = e.x;
    mouse.y = e.y;
})
let i = 5;
addEventListener("click",(e) => {
    targetPos.x = e.x;
    targetPos.y = e.y;
    let arrow = new Arrow({img:arrowImage,x:100 ,y:innerHeight - 200,width:arrowWidth,height:arrowHeight,ammo:false});
    arrow.angleForTarget = Math.atan2(targetPos.y - (arrow.y + 8),targetPos.x - (arrow.x + 8));
    let dx = Math.cos(arrow.angleForTarget) * arrowSpeed;
    let dy = Math.sin(arrow.angleForTarget) * arrowSpeed;
    arrow.velocity.x = dx;
    arrow.velocity.y = dy;
    if(arrowsLeft.length > 0){
        arrows.push(arrow);
    }
    i--;
    arrowsLeft.splice(i,1);
    console.log(i);
});

addEventListener("mousedown",()=>{
    decrementGravity = true;
})

setInterval(()=>{
    seconds--;
    if(seconds <= 0){
        seconds = 60;
    }
},1000);

setInterval(()=>{
    minutes--;
},60000);