
var cat1,cat2,cat3,cat4;
var mouse1,mouse2,mouse3,mouse4;





function preload() {
    //load the images here
    backgroundImg=loadImage("images/garden.png")
    catImg1= loadAnimation("images/cat1.png"); 
    catImg2=loadAnimation("images/cat2.png","images/cat3.png"); 
    catImg3= loadAnimation("images/cat4.png");
     mouseImg1=loadAnimation("images/mouse1.png");
     mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png"); 
     mouseImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(900,600)
    cat.addAnimation("catwalking",catImg1)
    cat.scale=0.25;

    mouse = createSprite(200,600)
    mouse.addAnimation("mousewalking",mouseImg1)
    mouse.scale=0.15;
    
    mouse.addAnimation("mouseteasing",mouseImg2)

    cat.addAnimation("catwalking",catImg2)

}



function draw() {

    background(backgroundImg);

    //Write condition here to evalute if tom and jerry collide
   if(cat.x-mouse.x<=cat.width/2-mouse.width/2){
   //cat.velocityX=0;
   cat.addAnimation("catsitting",catImg3)
  // cat.scale=0.2;
   cat.changeAnimation("catsitting",catImg3)
   mouse.addAnimation("mouserest",mouseImg3)
 // mouse.scale=0.15;
   mouse.changeAnimation("mouserest",mouseImg3)
   }

    drawSprites();
}


function keyPressed(){

    if(keyCode===LEFT_ARROW){
     mouse.changeAnimation("mouseteasing",mouseImg2)
     //cat.x=cat.x-7;
     cat.velocityX=-5;
     cat.changeAnimation("catwalking",catImg2)

    }

  //For moving and changing animation write code here



}
