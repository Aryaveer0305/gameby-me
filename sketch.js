var p1,p2,astroid1,astroid2,astroid3 ;
var blast,blastimage,space,spaceimage;
var spaceship,spaceshipimage,laserimage;
var shoot= 0 ;
var score= 0 ;
var laser,astroidgroup,lasergroup ;
var exploisonsound,lasersound,exploisonimage ;
 var instruction = 0 ;
 var play = 1;
 var end = 2;
 var gamestate = instruction;
 var endline,canvas ; 
 
 function preload()
 {
     spaceimage = loadimage ("space.png")
     spaceshipimage=loadimage ("spaceship.png");
     laserimage = loadimage("laser.png");
     astroid1 = loadimage("as1.png");
     astroid3 = loadimage("as2.png");
     astroid3 = loadimage("as3.png");
     blastimage = loadimage("blast.png");
     exploisonimage = loadimage("exploison.png");
     exploisonsound = loadsound("exploison.mp3");
     lasersound = loadsound("laser.mp3");
 }


 function setup ()
 {
     canvas = createcanvas(1000,700);
space = createSprite(250,350,30,20);
space.addImage(spaceimage);
space.velocityY = (5+score/10);

spaceship = createSprite(250,600);
spaceship.addImage(spaceshipimage);
spaceship.scale = 0.6;

p1 = createSprite(250,600);
p2 = createSprite(250,600);
astroid1 = new Groups;
laser = new Groups;

 }
 function draw()
 {

 }