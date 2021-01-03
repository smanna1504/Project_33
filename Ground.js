class Ground{
    constructor(){
        var options={
            isStatic:true,
            friction:0.8,
            restitution:0.5
        }

        this.body=Bodies.rectangle(width/2,790,width,20,options);
        this.width=width;
        this.height=20;
World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
    stroke('brown');
    fill('white');
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);
}

}