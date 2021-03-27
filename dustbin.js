var box1,box2,box3;
class DustBin{
   
    constructor(){
       
        box1=Bodies.rectangle(width/2,650,200,0,{isStatic:true});
        World.add(world,box1);
       box2=Bodies.rectangle((width/2)-40,570,10,180,{isStatic:true});
        World.add(world,box2);
        box3=Bodies.rectangle((width/2)+120,570,10,180,{isStatic:true});
        World.add(world,box3);
        this.image=loadImage("bin.png");
        
    }
    
    display(){
      
     
       imageMode(CENTER);
       //rect(box1.position.x,box1.position.y,200,0);
       image(this.image,box1.position.x,box1.position.y-95,300,300);
       // rect(box2.position.x,box2.position.y,10,180);
        //rect(box3.position.x,box3.position.y,10,180);
        
    }
        
};