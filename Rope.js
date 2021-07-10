class Rope {
    constructor(bodyA,pointB){
      var options={
         bodyA:bodyA,
         pointB:pointB,
         stiffness:1.2,
         length:200
     }
     this.rope=Constraint.create(
         options
     )
     World.add(world,this.rope);

     this.pointB=pointB
    
    }

    display(){
      
    }
}