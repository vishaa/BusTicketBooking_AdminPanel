import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Seat from './Seat';

function ReservationView() {
  const bookings = useSelector(state => state.reservation.bookings);
  const [seats, setSeats] = useState(Array(40).fill(false));
  const [hasReservationPopup, setHasReservationPopup] = useState(false);
  
  bookings.forEach(booking => {
    seats[booking.seatNumber - 1] = true;
  });

  const handleIsSelected = (index) => {
    updateSeat(index);
  };

  const updateSeat = (index) => {
    const updatedSeats = [...seats];
    updatedSeats[index] = !updatedSeats[index];
    setSeats(updatedSeats);
  }

  const handleHasReservationPopup = (value) => {
    setHasReservationPopup(value);
  }

  return (
    <div>

      <h2>Lower Deck</h2>
      <div>
        {seats.slice(0, 20).map((isSelected, index) => (
          <Seat
            key={`lower_${index}`}
            seatNumber={index + 1}
            isSelected={isSelected}
            handleIsSelected={() => handleIsSelected(index)}
            hasReservationPopup={hasReservationPopup}
            handleHasReservationPopup={handleHasReservationPopup}
          />
        ))}
      </div>

      <h2>Upper Deck</h2>
      <div>
        {seats.slice(20).map((isSelected, index) => (
          <Seat
            key={`upper_${index}`}
            seatNumber={index + 21}
            isSelected={isSelected}
            handleIsSelected={() => handleIsSelected(index + 20)}
            hasReservationPopup={hasReservationPopup}
            handleHasReservationPopup={handleHasReservationPopup}
          />
        ))}
      </div>

    </div>
  );
};

export default ReservationView;
