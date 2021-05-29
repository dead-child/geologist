class hammer
{
    'restitution'=0.5
    'density'=2
    'friction' = 0.1
    constructor(x,y,w,h)
	{

        
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,230,50)
			rect(0,0,this.w, this.h);
			pop()
			
	}



}


