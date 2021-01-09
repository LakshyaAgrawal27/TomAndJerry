
function preload() {
    //load the images here
    jerryImage = loadAnimation("jerryOne.png");
    tomImage = loadAnimation("tomOne.png")
    bgImage = loadImage("garden.png")
    tomImg2 = loadAnimation("tomTwo.png","tomThree.png");
    jerryImg2= loadAnimation("jerryTwo.png","jerryThree.png");
    tomImg3 = loadAnimation("tomfour.png");
    jerryImg3 = loadAnimation("jerryfour.png");
}

function setup(){
    createCanvas(800,800);
    bg = createSprite(600, 400);
    bg.addImage("bg",bgImage);
    tom = createSprite(600, 650);
    tom.addAnimation("sleepingTom", tomImage); 
    tom.scale=0.2
    jerry = createSprite(200, 650);
    jerry.addAnimation("jerry", jerryImage);
    jerry.scale=0.1;
    
    //create tom and jerry sprites here

}

function draw() {
   
    background(255);
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
    //Write condition here to evalute if tom and jerry collide
    tom.velocityX=0;
    tom.addAnimation("tomLastImage", tomImg3);
    tom.x =300;
    tom.scale=0.2;
    tom.changeAnimation("tomLastImage");
    jerry.addAnimation("jerryLastImage", jerryImg3);
    jerry.scale=0.15;
    jerry.changeAnimation("jerryLastImage");
    }
    //keyPressed();
    drawSprites();
}


function keyPressed(){
    if (keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("catRunning", tomImg2);
        tom.changeAnimation("catRunning");
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay=10
        jerry.changeAnimation("jerryTeasing");
    }

  //For moving and changing animation write code here


}
