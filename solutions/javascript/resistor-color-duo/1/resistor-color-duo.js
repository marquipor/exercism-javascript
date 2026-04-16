const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue",      
                "violet","grey","white"]
export const decodedValue = ([a,b]) => {
  
  const stringValue = `${COLORS.indexOf(a)}${COLORS.indexOf(b)}`;
  return Number(stringValue);

}
