// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {

  switch(name){
    case 'Pure Strawberry Joy': return 0.5;
    case 'Energizer': return 1.5;
    case 'Green Garden': return 1.5;
    case 'Tropical Island': return 3;
    case 'All or Nothing': return 5;
    default: return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let totalLimes = 0;

  while(wedges<wedgesNeeded && totalLimes<limes.length){

    let lime = limes[totalLimes];
    
    switch(lime){
      case 'small':
        wedges+=6;
        break;
      case 'medium': 
        wedges+=8;
        break;
      case 'large': 
        wedges+=10;
        break;
      
    }

    totalLimes++;
  }

  return totalLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  // Si nos queda tiempo y órdenes por completar, se entra en el bucle
  while(timeLeft > 0 &&  orders.length>0){
    // Elimino la primera bebida del array
    const nextJuice = orders.shift();
    // Obtengo el tiempo de la bebida quitada del array
    const timeNeeded = timeToMixJuice(nextJuice);

    // Al tiempo que queda, le resto el necesario
    timeLeft-=timeNeeded;

  }  
  return orders;
}
