class Block extends BaseClass {
    constructor(x, y,width,height){
      super(x,y,width,height);
      this.Visiblity = 255;
    }
  
   display(){
     //console.log(this.body.speed);
     if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       pop();
     }
     
   }
  
  
  
  };