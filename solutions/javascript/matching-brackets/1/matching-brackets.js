export const isPaired = (txt) => {
  const stack = [];
  const pairs = {
    ")":"(",
    "]":"[",
    "}":"{"
  };

  for(let char of txt){
    
    if(char === "(" || char === "[" || char === "{"){
      stack.push(char);
      
    } else if(char === ")" || char === "]" || char === "}"){

      if(stack.length === 0 || stack.pop()!==pairs[char]){
        return false;
      }
    }
  }
  return stack.length === 0;
};