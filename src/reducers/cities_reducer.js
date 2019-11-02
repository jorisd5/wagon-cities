export default function(state, action) {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }

  // Handle some actions
  switch (action.type) {
    case 'SET_FLATS':
      return action.payload;
    default:
      return state;
  }
}
