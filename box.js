 class Box extends baseclass {
    constructor(x, y){
      super(x,y,50,50);
      this.visibilitiy=255;
    }
  display(){
  console.log(this.body.speed)
  if(this.body.speed<3){
    super.display();
  }else{
  World.remove(world,this.body)
  push();
  this.visibilitiy=this.visibilitiy-10;
  tint(255,this.visibilitiy)
  rect(this.body.position.x,this.body.position.y,50,50)
  pop();
  }
  
  }
  };
