import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <div className='VendingMachine'>
      <h1>A Beautiful Vending Machine</h1>
      <nav className='VendingMachine-static-link'>
        <Link to='/snacks'>snacks</Link>
      </nav>
      <nav className='VendingMachine-static-link'>
        <Link to='/drinks'>drinks</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default VendingMachine;
