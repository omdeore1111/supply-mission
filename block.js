class block{

 constructor(x,y){

  var options = {

  isStatic = true
  }
  

  this.body = Bodies.rectangle(x,y,20,200);
  this.width = 20;
  this.height = 200;  
  World.add(world, this.body);

  
 }

 display(){

  var pos = this.body.position;
  //pos.x = this.x;
  //pos.y = this.y;

  push()
  translate(pos.x, pos.y);
  rectMode(CENTER);
  fill("red");
  rect(0,0, this.width, this. height);
  pop();

 }

}