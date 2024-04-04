class Point{
    x = 0;
    y = 0;
    label = 0;

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.label = this.getLabel();
    }

    getLabel(){
        return (this.x > this.y) ? 1 : -1;
    }

    getPixelX(){
        const px = map(this.x,-1,1,0,width);
        return px;
    }

    getPixelY(){
        const py = map(this.y,-1,1,height,0);
        return py;
    }

    show(){
        stroke(0);//define a cor do contorno(p5)

        if(this.label == 1){
            fill(0)//define a cor do preenchimento
        }else{
            fill(255);
        }
        const px= this.getPixelX();
        const py= this.getPixelY();
        ellipse(px,py,22,22);

    }

    debug(){
        console.log("label: ",this.label,",x",this.x,",y",this.y);
    }
}