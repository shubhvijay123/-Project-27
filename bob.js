class Bob{
       constructor(x,y,r)
    {
      var options={
      density:0.5

      }
       
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r,options)
        World.add(world, this .body);
    }
    display()
    {
        var paperpos=this.body.position;

        push();
        translate(paperpos.x,paperpos.y);
       strokeWeight(4) 
        stroke("red");
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        pop();

    }
}