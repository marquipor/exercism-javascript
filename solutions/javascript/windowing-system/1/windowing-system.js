// TASKS 1 AND 2 -> PROTOTYPE SYNTAX

export function Size(width=80, height=60){
    this.width=width;
    this.height=height;
}

Size.prototype.resize = function(newWidth, newHeight){
  this.width=newWidth;
  this.height=newHeight;
};

export function Position(x=0,y=0){
  this.x=x;
  this.y=y;
}

Position.prototype.move = function(newX, newY){
  this.x=newX;
  this.y=newY;
}
  
export class ProgramWindow{
  constructor(){
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize){
    
    // Limite mínimo de 1
    let requestedWidth = newSize.width<1?1:newSize.width;
    let requestedHeight = newSize.height<1?1:newSize.height;

    // Espacio disponible:
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const finalWidth = requestedWidth>maxWidth?maxWidth:requestedWidth;
    const finalHeight = requestedHeight>maxHeight?maxHeight:requestedHeight;

    this.size.resize(finalWidth,finalHeight);
  }
  move(position){
      // Movimiento mínimo
    let requestedWidth = position.x<0?0:position.x;
    let requestedHeight = position.y<0?0:position.y;

    // Posicion máxima
    const maxWidth = this.screenSize.width - this.size.width;
    const maxHeight = this.screenSize.height - this.size.height;

    const finalWidth = requestedWidth>maxWidth?maxWidth:requestedWidth;
    const finalHeight = requestedHeight>maxHeight?maxHeight:requestedHeight;

    this.position = new Position(finalWidth, finalHeight);
  }
 
}
 export function changeWindow(programWindow){
  
  programWindow.size= new Size(400,300);

  programWindow.position = new Position(100,150);

  return programWindow;

  
  }
