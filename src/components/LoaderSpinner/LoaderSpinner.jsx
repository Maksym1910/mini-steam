import React from 'react';

import './LoaderSpinner.css';

const LoaderSpinner = () => {
  return (
    <div className='lds-center'>
      <div className='lds-spinner'>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    </div>
  );
};

export default LoaderSpinner;
