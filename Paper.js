class Paper{
    constructor(){
        var options ={
            
              'restitution':1.0,
             'friction':1.0,
             'density':5.0,
             'isStatic' : false
            
        }
        this.body = Bodies.circle(250,540,20,options);
        this.width =33;
      this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,69,55);
    }
}