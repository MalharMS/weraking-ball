class Chain{

    constructor(bodyA,pointB){
        var Const_option={
            bodyA:bodyA,
            pointB:pointB,
            length:300,
            stiffness:1.2
        }
        this.chain = Constraint.create(Const_option);
        this.pointB = pointB;
        
        World.add(world,this.chain);

    }
    display(){
        var pointA = this.chain.bodyA.position;
        push ();
            strokeWeight(3);
            stroke('black');
            line  (this.pointB.x,this.pointB.y,pointA.x,pointA.y);
        pop ();


    }
} 