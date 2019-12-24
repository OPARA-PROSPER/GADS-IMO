import React from 'react';
import Button from './button';
import alc from './img/imo-scholars.jpg';

export default function LearnersComponent() {
  const img = {
    background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${alc})`,
    backgroundPostion: 'center',
    backgroundSize: 'cover',
    height: '500px'
  }

  return (
    <div className="row learners-component">
      <div className="col-lg-4 order-lg-1 align-self-center learners-component-description">
        <h2>Scholars</h2>
        <p>
          GADS scholars in Imo state are paasionate individuals that seek
          to grow techinically.
        </p>

        <Button link_to="View all Scholars" bg_color="#FFAF30"/>
      </div>

      <div className="col-lg-8 order-lg-2" style={img}>

      </div>
    </div>
  );
};