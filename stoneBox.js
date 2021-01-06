class Stone extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/stone.png");
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
      }
  
  };
  