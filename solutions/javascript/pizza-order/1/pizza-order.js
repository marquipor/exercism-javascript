/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
   // Si el array extras está vacío, devuelve el precio de la pizza
  if(extras.length===0){
    switch(pizza){
      case "Margherita": return 7;
      case "Caprese": return  9;
      case "Formaggio": return 10;
    }
  }
    // Constante que obtiene el primer elemento del array que se pasa por param
    const [firstExtra, ...rest] = extras;
    // Almacenamos precio del Topping
    let cost = (firstExtra==="ExtraToppings")? 2:1;
    /* Sumamos el precio del topping a la suma de la siguiente llamada
    Al pasar por parámetro rest, firstExtra será esta vez el primer elemento del       resto, y se irán "descartando" progresivamente. Cuando no haya extras, se suma      a la variable cost el precio de la pizza */ 
    return cost + pizzaPrice(pizza, ...rest);

}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {

  let totalPrice = 0;

  for(const order of pizzaOrders){
    totalPrice+=pizzaPrice(order.pizza, ...order.extras);
  }
  return totalPrice;

}