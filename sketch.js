var cat ;
var bg,bgImg;
var mouse, mouseImg, mouseImg2 ;



function preload() {
    //load the images here
    catImg = loadImage("images/cat1.png")
    catImg2 = loadImage("images/cat2.png")
    catImg3 = loadImage("images/cat3.png")
    catImg4 = loadImage("images/cat4.png")
    bgImg = loadImage("images/garden.png")
    mouseImg = loadImage("images/mouse2.png")
    mouseImg2 = loadImage("images/mouse4.png")
  
}

function setup(){
    createCanvas(1200,800);
    //create tom and jerry sprites here
    cat = createSprite(620,620,20,20)
    cat.addImage(catImg)
    cat.scale=0.1
    bg  = createSprite(400,400,10,10)
    bg.addImage(bgImg)
    mouse =createSprite(100,610,10,10)
    mouse.addImage(mouseImg)
    mouse.scale=0.1
}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide

    if(keyDown("up"))
    {
     cat.velocityY=-4
     cat.addImage(catImg2)
    }

    if(keyDown("down"))
    {
     cat.velocityY=4
     cat.addImage(catImg2)       
    }

    if(keyDown("left"))
    {
     cat.velocityX=-4
     cat.addImage(catImg2)   
    }

    if(keyDown("right"))
    {
     cat.velocityX=4  
     cat.addImage(catImg2) 
    }

    if(keyDown("space"))
    {
     cat.velocityX=0
     cat.velocityY=0
     cat.addImage(catImg3)   
    }

    if(cat.isTouching(mouse))
    {
        cat.velocityX=0
        cat.velocityY=0
        cat.addImage(catImg4)  
        mouse.addImage(mouseImg2) 
    }
    



    drawSprites();
    cat.display();
    mouse.display();
}


function keyPressed(){

  //For moving and changing animation write code here
 

}
