class Chain{
    constructor( bodyA,bodyB){
      var options ={ 
          bodyA:bodyA,
          bodyB:bodyB,
         stiffeness:0.5
      }
      this.chain=Constraint.create(options)
      
      World.add(myWorld,this.chain);
       
    }
    show()
    {
        strokeWeight(5)
         line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
          
    }
  
  
  }
  