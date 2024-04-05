import React, { useState } from 'react';

const EditBookingPopup = ({ booking, onUpdate, onCancel }) => {
  const [firstName, setFirstName] = useState(booking.firstName);
  const [lastName, setLastName] = useState(booking.lastName);
  const [email, setEmail] = useState(booking.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBooking = {
      ...booking,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onUpdate(updatedBooking);
  };

  return (
    <div style={popupOverlayStyle}>
      <div style={popupStyle}>
        <button style={closeBtnStyle} onClick={onCancel}>X</button>
        <h2>Edit Booking</h2>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={btnGroupStyle}>
            <button type="submit" style={updateBtnStyle}>Update</button>
            <button type="button" style={cancelBtnStyle} onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const popupOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const popupStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
};

const closeBtnStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const btnGroupStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const updateBtnStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
  marginRight: '10px',
};

const cancelBtnStyle = {
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default EditBookingPopup;
