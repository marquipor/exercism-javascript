//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(squares) {

    this.squares=squares;
  }

  get sumOfSquares() {
    
    let quantity = 0;
    
    for(let i = 1; i<=this.squares; i++){
      quantity += Math.pow(i,2);
    }

   return quantity;
  }

  get squareOfSum() {
    let quantity = 0;
    
    for(let i = 1; i<=this.squares; i++){
      quantity+=i;
    }
   return Math.pow(quantity,2);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares; 
  }
}
