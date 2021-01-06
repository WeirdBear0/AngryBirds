const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform, slingshot;
var posArray, fired;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    smoke = loadImage("sprites/smoke.png");
}

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,height,1600,20);
    platform = new Ground(150, 505, 300, 170);

    box1 = new Box(1000,520,70,70);
    box2 = new Box(1220,520,70,70);
    box6 = new Box(1440, 520, 70,70);
    pig1 = new Pig(1110, 550);
    log1 = new Log(1110,460,300, PI/2);

    box3 = new Box(1000,440,70,70);
    box4 = new Box(1220,440,70,70);
    pig3 = new Pig(1110, 420);

    log3 =  new Log(1110,380,300, PI/2);

    box5 = new Box(1110,360,70,70);
    log4 = new Log(1060,320,150, PI/7);
    log5 = new Log(1170,320,150, -PI/7);
    log6 = new Log(1400, 520, 150, 0);
    pig4 = new Pig(1440, 590);
    log7 = new Log(1270, 520, 150,0);
    box7 = new Box(1330, 520,70, 70);
    pig5 = new Pig(1330, 580);
    wall = new Ground(width, 400, 20,800);
    bird = new Bird(200,240);
    fired = false;
    slingshot = new Slingy(bird.body, {x:200,y:240});
    // log8 = new Log(1080, 480, 200,PI/2);
    stone1 = new Stone(900, 480,70,70);
    stone2 = new Stone(700, 480,70,70);
    log8 = new Log(800, 460, 250, PI/2);
    stone3 = new Stone(900, 430,70,70);
    stone4 = new Stone(700, 430,70,70);
    log9 = new Log(800, 410, 250, PI/2);
    stone5 = new Stone(900, 380,70,70);
    stone6 = new Stone(700, 380,70,70);
    log10 = new Log(800, 360, 250, PI/2);
    pig6 = new Pig(800,480);
    pig7 = new Pig(800,450);
    pig8 = new Pig(800,365);
    stone7 = new Stone(900, 330,70,70);
    stone8 = new Stone(700, 330,70,70);
    log11 = new Log(800, 310, 250, PI/2);
    stone9 = new Stone(900, 280,70,70);
    stone10 = new Stone(700, 280,70,70);
    log12 = new Log(800, 260, 250, PI/2);

    posArray = [];



}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    box6.display();
    log6.display();

    platform.display();
    bird.display();
    slingshot.display();
    pig4.display();
    log7.display();
    pig5.display();
    box7.display();
    wall.display();
    log8.display();
    stone1.display();
    stone2.display();
    log9.display();
    stone3.display();
    stone4.display();
    log10.display();
    stone5.display();
    stone6.display();
    pig6.display();
    pig7.display();
    pig8.display();
    log11.display();
    stone7.display();
    stone8.display();
    log12.display();
    stone9.display();
    stone10.display();
    if(bird.body.position.x>220 && bird.body.velocity.x>10 && frameCount%2===0){
        posArray.push([bird.body.position.x, bird.body.position.y])
    }
    for(var i = 0; i<posArray.length; i++){
        image(smoke, posArray[i][0],posArray[i][1], 20,20);
    }
    
}

function mouseDragged(){
    // if(fired === false && mouseX>=0 && mouseX<200){
        Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY})
    // }
}

function mouseReleased(){
    // if(fired === false){
        slingshot.fly();

        fired = true;
    // }
}

function keyPressed(){
    if (keyCode === 32){
        Matter.Body.setPosition(bird.body, {x:200, y:240});
        slingshot.attach(bird.body);
        posArray=[];
        bird.body.velocity.x = 0;
        
    }

}