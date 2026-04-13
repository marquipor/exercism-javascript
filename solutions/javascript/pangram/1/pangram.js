export const isPangram = (quote) => {
  // Remove non-alphabetic characters and convert to lowercase
  let lettersOnly = quote.toLowerCase().replace(/[^a-z]/g, '');
  // Filter out duplicate characters by creating a Set
  let set = new Set(lettersOnly);
  
  // Check if the set size equals the number of lettesr in the English alphabet
  return set.size===26;
};
