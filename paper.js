class Paper{
    constructor(x){
        var options={
            isStatic:false,
            restitution:0.2,
            friction:0.5,
            density:0.4
           
        }
        this.body=Bodies.circle(x,500,37,options);

        this.image=loadImage('paper.png');
        
        World.add(world,this.body)
    }
    display(){
        
        var pos=this.body.position;
        var angle=this.body.angle;
        angleMode(RADIANS);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0,80,100) ;
       pop();
    }
};