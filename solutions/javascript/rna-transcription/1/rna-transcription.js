const MAPPING = {
  "G":"C",
  "C":"G",
  "T":"A",
  "A":"U"
};
export const toRna = (dna) => {
    return dna
            .split('') // Convertir en array
            .map((nucleotido) => MAPPING[nucleotido])
            .join('');
};