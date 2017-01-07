
function SideScroller()
{
	this.y = height-40;
	this.x = 20;
	this.xSpeed = 5;
	this.gravity = 1;
	this.velocity = 0;
	this.x = constrain(this.x, 0, width-20);
	
	this.show = function()
	{
		fill(0,102,0);
		rect(0, height-20,width, 20 )
		fill(255);
		rect(this.x,this.y,20,20);
	}
	
	this.update = function()
	{
		this.velocity = this.velocity + this.gravity;
		this.y = this.y + this.velocity;

		if(this.y>height-40)
		{
		this.y = height-40;
		this.velocity = 0;
		}
		if(this.y<0)
		{
		this.y = 0;
		this.velocity = 0;
		}
		if(this.x<0)
		{
		this.x = 0;
		}
		if(this.x>width-20)
		{
		this.x = width-20;
		}
	}
	
	this.jump =function()
	{
		this.velocity = this.gravity*-20;
	}
	
	this.moveF = function()
	{
		this.x = this.x + this.xSpeed;
	}
	
	this.moveB = function()
	{
		this.x = this.x + this.xSpeed*-1;	
	}
}