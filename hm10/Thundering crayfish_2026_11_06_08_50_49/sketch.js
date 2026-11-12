var whiteX= 155;
var speed = 2;
var pinkX = 155;
var speed = 2
function setup()
    {
        createCanvas(300,500);
    }
    function draw()
    {
     pinkX++;
     if(pinkX <= 130)
     {
       speed = 1
     }
      if(pinkX >= 170)
{
    speed = -2;
}1
      {
        whiteX++;
      if(whiteX <= 130)
      {
        speed = 1
     
      if(whiteX >=170)
        } 
      speed = -2;
    }1
    pinkX = pinkX + speed;
        background(220);

    background(120,45,78);
  fill(290,204,0)
      ellipse(168,200,200,350);
      triangle(10, 150, 75, 150, 70, 250);
  fill(255, 255, 255)
   circle(whiteX,150,50);
  fill(300,98,98)
   circle(pinkX,155,20);
  line(130, 250, 100, 300);
    text('Myah Torres', 10, 30);
   point(125, 300);
  fill(222,45,78)
   ellipse(150,40,120,80);
   rect(200,30,20,300);
   circle(250,55,150);
   text('Ta Da!',100, 400);
}
