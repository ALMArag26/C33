//PASO 1 REVISION DE VARIABLES 
var player, playerImg, chestImg, homeImg, dragon1, dragon2, dragonImg, bgImg;
var gameState = "initial";
var numOfChests = 0;
var vy1 = -2;
var vy2 = 2;
var allWalls = [];
var allChests = []

var walls = [
    {x:10, y:20, w:1700, h:40}, //Ladrillo superior
    {x:10, y:450, w:1700, h:40},
    {x:10, y:450,w: 40, h: 900 }, // Ladrillo izquierdo
    {x:600,y:50 , w: 250, h: 40}, // Escalera inversa
    {x:600,y:90 , w: 150, h: 40}, // Escalera inversa
    {x:600,y:130 , w: 80, h: 40}, // Escalera inversa
    {x:700, y:300, w:250, h:40}, // L inversa
    {x:800,y:370, w:50, h:120}, // L inversa
    {x:300, y:300, w:250, h:40}, // L inversa
    {x:200,y:370, w:50, h:120}, // L inversa
    
  { x: 1000, y: 20, w: 2000, h:40 }, // Ladrillo superior
  { x: 1000, y: 450, w: 2000, h: 40 }, // Ladrillo inferior 1
  { x: 900, y: 450, w: 40, h: 700 }, // Ladrillo izquierdo
  { x: 1100, y: 165, w: 200, h: 250 }, // Gran bloque
  { x: 1250, y: 420, w: 50, h: 25 }, // Escaleras
  { x: 1300, y: 395, w: 50, h: 25 }, // Escaleras
  { x: 1350, y: 370, w: 50, h: 25 }, // Escaleras
  { x: 1500, y: 370, w: 50, h: 25 }, // Escalera inversa
  { x: 1550, y: 395, w: 50, h: 25 }, // Escalera inversa
  { x: 1600, y: 420, w: 50, h: 25 }, // Escalera inversa
  { x: 1760, y: 150, w: 250, h: 40 },
  { x: 1900, y: 105, w: 40, h: 130 },
  { x: 1950, y: 350, w: 100, h: 250 }
    
];

var chests = [
  { x: 300, y: 380, isCollected: false },
  { x: 800, y: 90, isCollected: false },
  { x: 700, y: 380, isCollected: false },
  { x: 1380, y: 130, isCollected: false },
  { x: 1430, y: 400, isCollected: false },
  { x: 1800, y: 80, isCollected: false }
];

function preload() {
    //precarga las imagenes 
  
}



function setup(){
  createCanvas(950, 470);
  
  player = createSprite(40, height / 2, 50);
  player.addImage("player-image", playerImg);
  player.scale = 0.03
  
  // Creando el sprite del dragón
     
  
  // Agregando imágenes al sprite del dragón
    /
  
  // Agregando la velocidad inicial en la dirección 'y' para los dragones
    
  
  
  
  
  for (var i in walls) {
    var brick = createSprite( walls[i].x, walls[i].y, walls[i].w, walls[i].h);
    brick.shapeColor = "#432616"

    allWalls.push(brick);
  }
  
  
  for(var j in chests){
    var chest = createSprite(chests[j].x, chests[j].y, chests[j].w, chests[j].h)
    chest.addImage("chest-image", chestImg)
    chest.scale = 0.09
    allChests.push(chest)    
  }
  
}




function draw(){
  background(bgImg);
  
  // Colisión para los muros
  for(var i in allWalls){
   player.collide(allWalls[i])
  }
    
//  // Agregando gravedad al jugador
  

  
  //if estado win
  
  
     
  if (allWalls[3].x < -1300) {
    push();
    imageMode(CENTER);
    image(homeImg, 900, 385, 100, 90);
    pop();
  }

  
  // Recolectando cofres
  for(var j in allChests){
    if(player.collide(allChests[j])){
      allChests[j].visible = false
      allChests[j].destroy()
      numOfChests +=1
    }
  }
  
  
  // if para el Fin del juego
    
    //LLAMAR METODOS 
  drawSprites();
  
}




//PASO 8
function playerControls() {
   if(keyDown("up")){
    player.velocityY = -10;
  }
  
    //if presionando rigth o estado win 
  
    //IF estado inicial
    

      player.x +=3;
     
    if(allWalls[0].x > -1300){
      for(var i in allWalls){
        allWalls[i].x -=3
      }
       
      for(var j in allChests){
         allChests[j].x -= 3;
      }
       
      dragon1.x -= 3
      dragon2.x -= 3
    }
  }  
  
   if(keyDown("left") && gameState === "play"){
     
      player.x -=3
  
     
     // bucle anidado para Mover los muros y los cofres
       
    
       
      for(var j in allChests){
         allChests[j].x += 3;
      }
      
      dragon1.x += 3
      dragon2.x += 3
    }
     
  }  
}

//PASO 6
function moveDragon(){
  // Agregando velocidad en la dirección 'y'
 
  
  
 
}


//crea la funcion showMessages 
function showMessages() {
  
};
