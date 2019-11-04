function setup() {
  createCanvas(600,600);
  background(220);

}

function draw() {
   fill(255,219,172);           //neck
   rect(225,300,150,300);
   fill(255,0,0);               //body
   ellipse(300,750,600,400);
   fill(92,61,51);              //hair         
   ellipse(300,190,300,240);
   fill(255,219,172);          //left ear
   ellipse(150,290,40,40);
   fill(255,219,172);          //right ear
   ellipse(450,290,40,40);
   fill(255,219,172);           //head
   ellipse(300,280,300,340,0);
   fill(255);                   //white eye
   ellipse(230,240,70,40,0);
   fill(255);                   //white eye
   ellipse(360,240,70,40,0);
   fill(156,116,43);            //eye color
   ellipse(230,240,40,40);
   fill(156,116,43);            //eye color
   ellipse(360,240,40,40);
   fill(10);                    //pupil
   arc(230,240,10,20,0.16,5.50);
   fill(10);                    //pupil
   arc(360,240,10,20,0.16,5.50);
   fill(255,200,160);           //nose
   triangle(300,250,320,320,280,320);
   fill(92,61,51);              //left moustache
   ellipse(250,325,100,15);
   fill(92,61,51);              //right moustache
   ellipse(350,325,100,15);
   strokeJoin(ROUND);
   fill(92,61,51);              //chin beard
   arc(300,417,180,100,0.00,3.14);
   fill(255,219,172);           //mouth
   strokeWeight(3);
   arc(300,350,70,50,0.00,3.14);
   fill(92,61,51);              //right eyebrow
   ellipse(360,200,90,20);
   fill(92,61,51);             //left eyebrow
   ellipse(240,200,90,20);  
}
