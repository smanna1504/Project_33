class Divisions{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            friction:2.0,
            restitution:0.0,
            density:1.5
        };

    this.body=Bodies.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
    World.add(world,this.body);
    }

display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill('white');
    rect(pos.x,pos.y,this.w,this.h);

    
        
}

}