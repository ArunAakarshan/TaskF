import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="header">Task Bender</h1>
      <div className="card-container">
        <div className="card">
          <h2>Are you admin?</h2>
          <p>Click here if you are an admin</p>
          <Link to="/AdminSign">Admin Dashboard</Link>
        </div>
        <div className="card">
          <h2>Are you Employee?</h2>
          <p>Click here if you are an employee</p>
          <Link to="/Form">Employee Dashboard</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
