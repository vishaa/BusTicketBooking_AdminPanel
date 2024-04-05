export const addBooking = (bookingDetails) => ({
    type: 'ADD_BOOKING',
    payload: bookingDetails,
});

export const updateBooking = (bookingDetails) => ({
    type: 'UPDATE_BOOKING',
    payload: bookingDetails,
});

export const deleteBooking = (bookingDetails) => ({
    type: 'DELETE_BOOKING',
    payload: bookingDetails,
});
