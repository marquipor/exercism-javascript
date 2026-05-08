export const parse = (text) => {
  let acronym = "";

  /* Normalize the string by replacing hyphens and underscores with spaces,
  then split by one or more withespace characters to get an array of words */ 
  
  const words = text.replace(/[-_]/g, " ").split(/\s+/);
  
  /* Iterate through each word in the array to take the first character and       convert it to uppercase. Append it to the acronym string */ 
  
  for(let word of words){
    acronym += word.charAt(0).toUpperCase();   
   }

    return acronym;
}
 
  
  
  
  
  
  
