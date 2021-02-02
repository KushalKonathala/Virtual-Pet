var dogImage; 
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  foodStock.set(20);
  var dog = createSprite(250,300,20,50);
  dog.addImage(dogImage);
  dog.scale = 0.2;
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}

if(keyWentUp(UP_ARROW)){
  dog.addImage(dogImage);
}

drawSprites();

textSize(25);
fill("black");
text("NOTE: Use the UP ARROW key to feed Drago milk.");
text("Food Remaining" + foodS, 350,350);
}

function readStock(data){
foods = data.val();
}

function writeStock(){

  if(x <= 0){
    x = 0;
  }
else{
  x = x-1;
}

database.ref('/').update({
  Food:x
});
}