export const convert = (numberOfRaindrop) => {
  let sounds = ""; 

  if(numberOfRaindrop%3 === 0) sounds+="Pling";
  if(numberOfRaindrop%5 === 0) sounds+="Plang";
  if(numberOfRaindrop%7 === 0) sounds+="Plong";

  return sounds || `${numberOfRaindrop}`;
};