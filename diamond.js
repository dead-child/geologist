class diamond{
    
   
    'restitution'=0.5
    'density'=5
    'friction' = 0.1
    constructor(x,y,w,h)
	{

        
		var options={
			isStatic:false			
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
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(16,22,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}

