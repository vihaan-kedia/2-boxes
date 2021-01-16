class Ground{
    // constructor defines properties of object.
    constructor(x,y,width,height){
    var ground_options ={
    isStatic:true
    }
    this.grb=Bodies.rectangle(x,y,width,height,ground_options);
    this.x=x
    this.y=y
    this.width=width;
    this.height=height;
    World.add(world,this.grb);
    }
   
    display(){
    rectMode(CENTER);
    rect(this.grb.position.x,this.grb.position.y,this.width,this.height);
    }
    }
    