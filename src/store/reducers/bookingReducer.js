const initialState = {
    bookings: [],
  };
  
  const bookingReducer = (state = initialState, action) => {
    switch (action.type) {

      case 'ADD_BOOKING':
        return {
          ...state,
          bookings: [...state.bookings, action.payload],
        };

      case 'UPDATE_BOOKING':
        return {
          ...state,
          bookings: state.bookings.map((booking) =>
            booking.seatNumber === action.payload.seatNumber ? action.payload : booking
          ),
        };

      case 'DELETE_BOOKING':
        return {
          ...state,
          bookings: state.bookings.filter(booking => booking.seatNumber !== action.payload.seatNumber),
        };

      default:
        return state;
    }
  };
  
  export default bookingReducer;
  