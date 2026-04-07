/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(time){
  if (time===0) return 'Lasagna is done.';
  else if (time>0) return 'Not done, please wait.';
  else return 'You forgot to set the timer.';
  
}

export function preparationTime(ingredients, time) {
  if(time===undefined) time = 2;
  
  return ingredients.length * time;
}

export function quantities(layers) {
  let quantityNoodles = 0;
  let quantitySauce = 0;
  
  for(const layer of layers){
    if(layer==="noodles") quantityNoodles++;
    else if(layer==="sauce") quantitySauce++;
  }
 return {"noodles" : quantityNoodles * 50, "sauce" : quantitySauce * 0.2};
}

export function addSecretIngredient(friendList, myList){

  let lastIngredient = friendList[friendList.length-1];
  
  myList.push(lastIngredient);
}

export function scaleRecipe(recipe, diner){
  let newRecipe = {};
  
  for(let ingredient in recipe){
    let newQuantity = (recipe[ingredient]/2) * diner;
    newRecipe[ingredient] = newQuantity;
  }
  return newRecipe;
}