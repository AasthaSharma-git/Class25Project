class Ground{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,1600,30,{isStatic:true});
        World.add(world,this.body);
        this.width=1600;
        this.height=30;

    }
    display(){
        var pos=this.body.position;
        push();
        rectMode(CENTER);
        strokeWeight(0)
        fill('white');
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
};