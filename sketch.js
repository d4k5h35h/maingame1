// Programmed by d4k5h35h
// Music and sfx by d4k5h35h
// Graphics by d4k5h35h
// Voices by d4k5h35h * yes even the female voices (audio editor (duh)) *
// Basically i did it all. Thank You.

/*
Level 1 is a walking tutorial as in, the player learns the controls by walking through the level. After reaching certain points in the game they learn a new control.The first control will be the left and right movement buttons. The second control will be jump. The third being the melee attack. The range button will be introduced in level 4.
*/

/*
Level 2 and 3 will be regular gameplay where the player learns to survive on their own.
Level 3 will end in a glorious boss fight with jonah.
*/

/*
Level 4 will be the introduction to the range weapon. this will be used by the player as the player for survival (duh).
*/

/*
Level 5 is also regular gameplay. Level 6 ends in a boss fight with Mavis (Drac's daughter).
*/

/*
Level 7 and 8 is also regular gameplay. Level 9 gives the player a small preview of Dracula's wrath
*/

/*
Level 10 starts and ends with the mega-boss fight. When the player wins they see the cutscene with dracula speaking his last words, then the player goes back home and has a party with his friends... well those who still live.

Then a man with large furry ears appears with a wolf as a small preview for the sequel.
*/

/*
  0.1 = loading screen
  0.2 = menu screen 
  0.3 = levels screen
  0.4 = upgrade screen
  0.5 = story screen
  0.6 = victory screen
  1-10 = game screen
*/
 
/*
grass tiles pngs
for levels 1-3

"img/grass/png/tiles/01.png","img/grass/png/tiles/02.png","img/grass/png/tiles/03.png","img/grass/png/tiles/04.png","img/grass/png/tiles/05.png","img/grass/png/tiles/06.png","img/grass/png/tiles/06.png","img/grass/png/tiles/07.png","img/grass/png/tiles/08.png","img/grass/png/tiles/09.png","img/grass/png/tiles/10.png","img/grass/png/tiles/11.png","img/grass/png/tiles/12.png","img/grass/png/tiles/13.png","img/grass/png/tiles/14.png","img/grass/png/tiles/15.png","img/grass/png/tiles/16.png","img/grass/png/tiles/16.png","img/grass/png/tiles/17.png","img/grass/png/tiles/18.png","img/grass/png/tiles/19.png","img/grass/png/tiles/20.png","img/grass/png/tiles/21.png","img/grass/png/tiles/22.png"
*/ 

var player;
var a = 0;
var up, left, right, melee, range;
var button1;
var gameState = 0.1;
var particles = [];
var cnv;
var platformimg1;
var floor1;
var b1img,b2img,b3img,b4img,b5img,b6img,b7img,b8img;
var bgimg1;

function preload(){
  // platformimg1 = loadImage();
  b1img = loadImage("playbutton.png");
  bgimg1 = loadImage("img/grass/png/elements/background.png");
}

function setup(){
  p5.disableFriendlyErrors === true;
  frameRate(60);
  cnv = createCanvas(windowWidth, windowHeight);
  cursor(CROSS);
    // floor1 = createSprite(width / 2, height / 2, 50, 50);
    // floor1.addimage("grass1", platformimg1);
    // floor1.scale = 0.2;
    player = createSprite(width / 2, height / 2, 50, 50);
    up = createSprite(width - 100, height - 150, 100, 100);
    left = createSprite(100, height - 150, 100, 100);
    right = createSprite(225, height - 150, 100, 100);
    melee = createSprite(width - 250, height - 150, 100, 100);
    range = createSprite(width - 100, height - 350, 100, 100);
    button1 = createSprite(width / 2,height - 50,250,75);
    button2 = createSprite(width / 2,height - 50,250,75);
    button1.addImage("b1image", b1img);
    button1.scale = 0.5;
 }

function draw(){
  background(0);
 
  //loding screen
  if (gameState === 0.1){
    fire();  
    button1.onMousePressed = function(){
      gameState = 1;
      button1.visible = false;
    }
  }
  
  //menu screen
  if(gameState == 0.2){
      button2 = createSprite(width / 2,height - 50,250,75);
  }

  //levels screen
  if(gameState == 0.3){}

  //upgrade screen
  if(gameState == 0.4){}

  //story screen
  if(gameState == 0.5){}

  //level 1 code
  if(gameState === 1){
    background(bgimg1);
    player.visible = true;
    up.visible = true;
    melee.visible = true;
    left.visible = true;
    right.visible = true;
    range.visible = false;    
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      player.setSpeed(5, 0);
    }
    else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      player.setSpeed(5, 90);
    }
    else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      player.setSpeed(5, 180);
    }
    else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      player.setSpeed(5, 270);
    }
    else{
      player.setSpeed(0, 0);
    }
  }
  
  // this is so that i dont need to write the same thing again and again
  else if(gameState === 0.1 || gameState === 0.2|| gameState === 0.3|| gameState === 0.4|| gameState === 0.5|| gameState === 0.6){
  player.visible = false;
  up.visible = false;
  melee.visible = false;
  left.visible = false;
  right.visible = false;
  range.visible = false;
  }
  
  drawSprites();
}


class Particle {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.alpha = 255;
    this.d = random(10, 30);
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 7.75;
  }
  finished() {
    return this.alpha < 0;
  }

  show() {
    noStroke();
    fill(random(180, 250), random(50, 200), 10, this.alpha);
    ellipse(this.x, this.y, this.d, this.d);
  }
}
function fire(){
  for (let i = 0; i < 5; i++) {
      let p = new Particle(width / 20, height / 2, random(5, 15), random(-5, 5));
      particles.push(p);
      let q = new Particle(width / 1.05, height / 2, random(-5, -15), random(5, -5));
      particles.push(q);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        particles.splice(i, 1);
      }
    }
  }