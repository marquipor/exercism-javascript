// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {

  function arrayToNumber(array){
    let number ="";
    for(let i = 0; i<array.length; i++){
      number+=array[i];
    }
    return parseInt(number);
  }

  return arrayToNumber(array1) + arrayToNumber(array2);

}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  
  let isLuckyNumber=true;
  // Convierto número a String
  let number = value + "";
  // Con un bucle for compruebo si el primer y el último número son iguales
  // Sumo del index, resto de la longitud del número
  for (let i = 0; i<number.length; i++){
    if (number.charAt(i) !== number.charAt((number.length-1)-i)){
            isLuckyNumber = false;
    }
  }

  return isLuckyNumber;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(input === '' || input === null || input === undefined){
    return 'Required field';
  }
  // Number() devuelve NaN si hay alguna letra en el String
  let number = Number(input);

  if(isNaN(number) || number===0){
    return 'Must be a number besides 0'
  } else return '';
    
}
