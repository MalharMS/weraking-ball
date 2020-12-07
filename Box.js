class Box{
    constructor(x,y ){
        var option={
            restitution:0.8,
            density:0.1,
            friction:0.8
        }
        this.body = Bodies.rectangle(x,y,70,70,option);
        this.width = 70;
        this.height = 70;
        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke ('red');
        fill ('darkgrey');
        rect(0,0,this.width,this.height);
        pop ();
    }
}