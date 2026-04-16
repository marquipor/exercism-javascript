const EARTH_YEAR_IN_SECONDS = 31557600;
const PLANETS_RATIOS = {
  'mercury' : 0.2408467,
  'venus' : 0.61519726,
  'earth' : 1.0,
  'mars' : 1.8808158,
  'jupiter' : 11.862615,
  'saturn' : 29.447498,
  'uranus' : 84.016846,
  'neptune' : 164.79132,
}
export const age = (planet, seconds) => {
  const planetName = planet.toLowerCase();

  if(!(planetName in PLANETS_RATIOS)){
        throw new Error("not a planet");
  }
  
  const earthAge = seconds / EARTH_YEAR_IN_SECONDS;
  const planetAge = earthAge / PLANETS_RATIOS[planetName];
  return Number(planetAge.toFixed(2));
};
