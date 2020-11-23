class Tree{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
   
this.x=600;
this.y=500;
this.w=w;
this.h=h;
this.image=loadImage("tree.png")
this.body=Bodies.rectangle(x,y,w,h,options);
World.add(world,this.body);

 }
 display(){
     var Gpos=this.body.position;
     rectMode(CENTRE);
      rect(Gpos.x,Gpos.y,this.w,this.h);
      
 }
}