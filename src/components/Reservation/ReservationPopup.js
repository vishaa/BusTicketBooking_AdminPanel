import React, { useState } from 'react';

const ReservationPopUp = ({ seatNumber, onSubmit, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.firstName && formData.lastName && formData.email ) {
      onSubmit({ ...formData, seatNumber, bookingDate: new Date().getTime() });
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    zIndex: '999',
  };

  return (
    <div style={popupStyle}>
      <h2>Booking Details for Seat {seatNumber}</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        style={{ marginBottom: '10px', width: '100%', padding: '8px', boxSizing: 'border-box' }}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        style={{ marginBottom: '10px', width: '100%', padding: '8px', boxSizing: 'border-box' }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={{ marginBottom: '10px', width: '100%', padding: '8px', boxSizing: 'border-box' }}
      />
      <button
        onClick={handleSubmit}
        style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}
      >
        Book
      </button>
      <button
        onClick={handleCancel}
        style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
      >
        Cancel
      </button>
    </div>
  );
};

export default ReservationPopUp;
