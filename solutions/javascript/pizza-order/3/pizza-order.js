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

const pizzaCost = {
    ExtraSauce    :  1,
    ExtraToppings :  2,
    Margherita    :  7,
    Caprese       :  9,
    Formaggio     : 10,
}

export function pizzaPrice(pizza, ...extras) {
   // Si el array extras está vacío, devuelve el precio de la pizza
  if(extras.length===0){
    return pizzaCost[pizza];
  }
    // Constante que obtiene el primer elemento del array que se pasa por param
    const [firstExtra, ...rest] = extras;
    // Almacenamos precio del Topping
    let cost = (firstExtra === "ExtraToppings") 
    ? pizzaCost["ExtraToppings"] 
    : pizzaCost["ExtraSauce"];
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

  /* ANOTACIONES SOBRE .reduce:
    - Argumento 1: Función de callback: 
                    - Parámetro 1: Acumulador
                    - Parámetro 2: Elemento presente del array
    - Argumento 2: Valor inicial del acumulador */ 
  
  return pizzaOrders.reduce(
    (accumulator, order)=> accumulator + pizzaPrice(order.pizza, ...order.extras),     0
  );
  
}