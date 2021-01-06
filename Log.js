class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.visibility = 255;
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed> 6){
      World.remove(world, this.body);
      push()
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
      this.visibility = this.visibility - 5;
    } 
    else{
      super.display();
    }
  }s
}
