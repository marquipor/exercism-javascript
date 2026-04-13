/* Se obtiene una fecha por parámetro y devuelvo
otra fecha que sea exactamente 1 gigasegundo desde la fecha */ 

//1 gigasegundo son mil millones de s (10^12)
const GIGASEGUNDO_EN_MS = 10**12;
// Recibe fecha por parámetro
export const gigasecond = (dateInstance) => {
  // Obtenemos la fecha en ms
  const tiempoEnMs = dateInstance.getTime();
  // Devolvemos un nuevo date sumando el gigasegundo en ms
  return new Date(tiempoEnMs+GIGASEGUNDO_EN_MS);
}
