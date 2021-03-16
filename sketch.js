var bg,img, cindrella, cinderllaImage, pumkin, pumkinImage, mice, miceImage, godMother, godMotherImage


function preload(){
 bg1Img = loadImage("bg1.jpg")
 cindrella_walk = loadAnimation("1.png","2.png","3.png","4.png")
}

function setup(){
  createCanvas(displayWidth, displayHeight)
  //b g

  // ground sprite

  bg1 = createSprite(600,300)
  bg1.scale = 2.0
 
  bg1.addImage(bg1Img)
  cindrella = createSprite(displayWidth-150,490)
cindrella.addAnimation("walk",cindrella_walk)
}

function draw(){
  background("black")

  if (keyDown("up")){
    cindrella.y=cindrella.y-1
  }
      if(keyDown("down")){
        cindrella.y=cindrella.y+1
      }
 
  if (keyDown("left")){
    cindrella.x=cindrella.x-1
    cindrella.mirrorX(+1)
  }
if (keyDown("right")){
  cindrella.x=cindrella.x+1
  cindrella.mirrorX(-1)
}




  drawSprites()
}
               