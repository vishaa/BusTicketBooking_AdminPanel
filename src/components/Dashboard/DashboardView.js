import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBooking, updateBooking } from '../../store/actions';
import EditBookingPopup from './EditBookingPopup';

const DashboardView = () => {
  const bookings = useSelector(state => state.reservation.bookings);
  const dispatch = useDispatch();
  const [editingBooking, setEditingBooking] = useState(null);

  const handleDelete = (booking) => {
    dispatch(deleteBooking(booking));
  };

  const handleEdit = (booking) => {
    setEditingBooking(booking);
  };

  const handleUpdate = (updatedBookingDetails) => {
    dispatch(updateBooking(updatedBookingDetails));
    setEditingBooking(null);
  };

  const handleCancel = () => {
    setEditingBooking(null);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Passenger Dashboard</h2>

      {editingBooking && (
        <EditBookingPopup
          booking={editingBooking}
          onUpdate={handleUpdate}
          onCancel={handleCancel}
        />
      )}

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>First name</th>
            <th style={tableHeaderStyle}>Last name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Seat number</th>
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td style={tableCellStyle}>{`${booking.firstName}`}</td>
              <td style={tableCellStyle}>{`${booking.lastName}`}</td>
              <td style={tableCellStyle}>{booking.email}</td>
              <td style={tableCellStyle}>{booking.seatNumber}</td>
              <td style={tableCellStyle}>{ new Date(booking.bookingDate).toLocaleString()}</td>
              <td style={tableCellStyle}>
                <button style={buttonStyle} onClick={() => handleEdit(booking)}>Edit</button>
                <button style={buttonStyle} onClick={() => handleDelete(booking)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
}

const tableHeaderStyle = {
  padding: '8px',
  backgroundColor: '#f2f2f2',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
};

const tableCellStyle = {
  padding: '8px',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '4px',
  marginRight: '5px',
  cursor: 'pointer',
};

export default DashboardView;
