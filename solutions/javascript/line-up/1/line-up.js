
export const format = (name, number) => {

  /* La coma "se desplaza" hacia la izquierda. Al operar el resto
  de 10 y 100 obtenemos el último y los dos últimos dígitos respectivamente */ 

  // True si los dos últimos dígitos se encuentran entre el 11 y el 13.
  const isSpecialCase = number%100 >=11 && number%100 <=13;

  const lastDigit = number%10;
  // En casos especiales y números que no sean 1, 2 y 3, el sufijo será th.
  let suffix = 'th';

  // Si el numero no acaba entre 11 y 13
  if(!isSpecialCase){
    // Cambio de sufijo para los números acabados en 1, 2 y 3.
    switch(lastDigit){
      case 1:
        suffix ='st';
        break;
      case 2:
        suffix ='nd';
        break;
      case 3:
        suffix='rd';
        break;
    }
  }
 
  return name + ", you are the " + number + suffix +
        " customer we serve today. Thank you!";
};
