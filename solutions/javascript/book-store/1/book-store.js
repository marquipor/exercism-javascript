export const cost = (books) => {
  // ----- PRICE CONFIGURATION ---- 
  const RAW_PRICE = 800;

  const discount = {
    0: 0,
    1 : RAW_PRICE ,
    2 : (RAW_PRICE * 0.95)*2, // 5% discount
    3 : (RAW_PRICE * 0.90)*3, // 10% discount
    4 : (RAW_PRICE * 0.80)*4, // 20% discount
    5 : (RAW_PRICE * 0.75)*5 // 25% discount
  };

  // ----- BOOK COUNTER -----
  const counts = {};
  
  for (const book of books){  
    //If book exists, increment; otherwise, initialize at 1 
    counts[book] = (counts[book]|| 0) + 1;
  }
  /* Extract quantities only.
  Book titles doesn't affect pricing */ 
  
  let quantities = Object.values(counts); 
  
// ----- FORMING GROUPS OF UNIQUE BOOKS -----

  const groups = [];
// Continue while there are still books remaining in any pile
  while(quantities.some(q=>q>0)){ 
    
    let sizeOfCurrentGroup=0;

    for(let i = 0; i<quantities.length; i++){
      if(quantities[i]>0){
        sizeOfCurrentGroup++;
        quantities[i]--;
      }
    }
    groups.push(sizeOfCurrentGroup);

    // ----- TEST 8: Big discount possible. 5+3 is expensive than 4+4!! 
    // Solution: Change value of groups if there's a group of 5 &3 
    while (groups.includes(5) && groups.includes(3)) {
      groups[groups.indexOf(5)] = 4;
      groups[groups.indexOf(3)] = 4;
  }
    
  }
  // ----- CALCULATING FINAL TOTAL-----
  let total = 0;
  
  for(let group of groups){
    total += discount[group];
  }
  return total;
};
