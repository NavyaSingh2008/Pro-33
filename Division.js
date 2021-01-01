class division {

    constructor(x,y,width,hieght){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,hieght,options);
        this.width=width;
        this.height=this.height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER)
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
    }
}