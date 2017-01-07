var s;

function setup()
{
	createCanvas(1350, 650);
	s = new SideScroller();
}
function draw()
{
	background(51);
	s.update();
	s.show();
	
	if (keyIsDown(RIGHT_ARROW))
	{
		s.moveF();
	}else if(keyIsDown(LEFT_ARROW))
	{
		s.moveB();
	}
}

function keyPressed()
{
	if(keyCode===32 && this.y === this.ground)
	{
		s.jump();
	}
}