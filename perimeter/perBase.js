export class Rectangle{
    constructor(width,height){
        this.width=width
        this.height=height
    }
    
    recPer(){
        console.warn(`perimeter = ${2*this.height+2*this.width}` )
    }

}