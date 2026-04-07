// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let counter = 0;
  stack.forEach(carta => {
    if (carta === card) counter++;
  });
  return counter;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {

  let counter=0;
  
  for(const card of stack){
    
    // Se comprueba si cada carta es par o impar
    const isEven = card % 2 === 0;
    
    // Se aumenta el recuento cuando coincida el tipo buscado con el de la carta
    if(type===isEven) counter++;
  }
  return counter;
}
