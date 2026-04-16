
export class Triangle {
  constructor(...sides) {
    this.a = sides[0];
    this.b = sides[1];
    this.c = sides[2];

    this.isTriangle =
      (this.a>0 && this.b>0 && this.c> 0) && 
      (this.a+this.b+this.c > 0) &&
      (this.a+this.b>=this.c)&&
      (this.a+this.c>=this.b)&&
      (this.b+this.c>=this.a);
  }

  get isEquilateral() {
    return (this.isTriangle)? this.a === this.b && this.a === this.c : false;
  }

  get isIsosceles() {
    return (this.isTriangle) ?
      this.a===this.b || this.b===this.c || this.a===this.c 
      : false;
  }

  get isScalene() {
    return (this.isTriangle)? 
      this.a!==this.b && this.a!==this.c && this.b!==this.c
      :false;
  }
}
