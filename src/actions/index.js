// import cities from '../cities';

// export default function setCities() {
//   // Simulating a DB
//   return {
//     type: 'SET_CITIES',
//     payload: cities
//   };
// }

export default function selectCity(city) {
  return {
    type: 'CITY_SELECTED',
    payload: city
  };
}
