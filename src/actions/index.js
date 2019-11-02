// TODO: add and export your own actions
import cities from '../cities';

export default function setCities() {
  // Simulating a DB
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}
