class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,restitution:0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
     push()
     translate(this.body.position.x, this.body.position.y);
      rotate(angle);
       rect(0, 0, this.width, this.height);
     pop()
     
    }
  };

  //rect(200,200,20,20)