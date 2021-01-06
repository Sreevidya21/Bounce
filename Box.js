class Box{
	constructor()
	{
      var options = {
  	isStatic: false
  }

  this.body = Bodies.rectangle(400,200,80,70,options);
  World.add(world, this.body);
	}

	display()
	{
	fill("red");
    rectMode(CENTER);
     rect(this.body.position.x,this.body.position.y,80,70);
	}
}