
class Box{
// constructor defines properties of object.
constructor(x,y,width,height){
var box_options ={
restitution: 1.0
}
this.boxb=Bodies.rectangle(x,y,width,height,box_options);
this.x=x
this.y=y
this.width=width;
this.height=height;
World.add(world,this.boxb);
}
display(){
push()
translate(this.boxb.position.x,this.boxb.position.y)
rotate(this.boxb.angle);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop()
}
}
