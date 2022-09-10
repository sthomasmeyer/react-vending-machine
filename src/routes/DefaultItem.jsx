import React from 'react';
import './DefaultItem.css';

const DefaultItem = ({ param }) => {
  return (
    <div className='DefaultItem'>
      <p>Select the {param} that you're interested in.</p>
    </div>
  );
};

export default DefaultItem;
