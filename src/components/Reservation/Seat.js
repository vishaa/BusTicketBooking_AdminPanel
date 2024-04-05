import React, { useState } from 'react';
import ReservationPopUp from './ReservationPopUp';
import { useDispatch } from 'react-redux';
import { addBooking, updateBooking } from '../../store/actions';

const Seat = ({ seatNumber, isSelected, handleIsSelected, hasReservationPopup, handleHasReservationPopup }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSeatClick = () => {
    if(hasReservationPopup) {
      return;
    }

    if(isSelected) {
      return;
    }

    handleHasReservationPopup(true);
    setIsPopupOpen(true);
  };

  const handleBookingSubmit = (bookingDetails) => {
    dispatch(addBooking(bookingDetails));
    setIsPopupOpen(false);
    handleIsSelected();
    handleHasReservationPopup(false);
  };

  const handleBookingUpdate = (bookingDetails) => {
    dispatch(updateBooking(bookingDetails));
    setIsPopupOpen(false);
    handleHasReservationPopup(false);
  };

  const handleBookingCancel = () => {
    setIsPopupOpen(false);
    handleHasReservationPopup(false);
  };

  const seatStyle = {
    backgroundColor: isSelected ? 'red' : 'green',
    border: '1px solid black',
    width: '40px',
    height: '40px',
    margin: '5px',
    cursor: 'pointer',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const canShowReservationPopup = isPopupOpen && !isSelected;

  return (
    <div style={seatStyle}>
      <button
        onClick={handleSeatClick}
      >
        {seatNumber}
      </button>

      {canShowReservationPopup && (
        <ReservationPopUp
          seatNumber={seatNumber}
          onSubmit={handleBookingSubmit}
          onUpdate={handleBookingUpdate}
          onCancel={handleBookingCancel}
        />
      )}
    </div>
  );
};

export default Seat;
