import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import ReservationView from './components/Reservation/ReservationView';
import DashboardView from './components/Dashboard/DashboardView';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
        <Route path="/" element={<Navigate to="/reservation" />} />
          <Route path="/reservation" element={<ReservationView />} />
          <Route path="/dashboard" element={<DashboardView />} />
        </Routes>
      </div>
    </Router>
  );
}

const Navigation = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px 20px' }}>

      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>

        <li style={{ display: 'inline-block', marginRight: '20px' }}>
          <Link to="/reservation" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Reservation</Link>
        </li>
        
        <li style={{ display: 'inline-block', marginRight: '20px' }}>
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Dashboard</Link>
        </li>

      </ul>

    </nav>
  );
};

export default App;