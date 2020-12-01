class Player{
    constructor(x,y){
       
        //this.image
        this.x = x;
        this.y = y;
        this.canvaspoint = {x:100,y:0}

    }
    display(){
        push();
        rectMode(CENTER);
        fill("blue")
        rect(this.x,this.y,20,20);
        fill(255)
        //quad(this.x-5,this.y,this.x+5,this.y,this.canvaspoint.x+25,this.canvaspoint.y,this.canvaspoint.x-25,this.canvaspoint.y);
        if (this.canvaspoint.x === this.x){
            quad(this.x-5,this.y,this.x+5,this.y,this.canvaspoint.x+25,this.canvaspoint.y,this.canvaspoint.x-25,this.canvaspoint.y);
        }
       else if (this.canvaspoint.y === this.y){
            quad(this.x,this.y-5,this.x,this.y+5,this.canvaspoint.x,this.canvaspoint.y+25,this.canvaspoint.x,this.canvaspoint.y-25);
        }
        else {
            push();
            translate(this.x,this.y);
            var v0 = createVector(this.canvaspoint.x-this.x,this.canvaspoint.y-this.y);
            var v1= p5.Vector.mult(v0,10);
            fill(255)
            quad(0,0,0,0,v1.x+100,v1.y+100,v1.x-100,v1.y-100);
            pop();
        }
        
    }
   
    
}