import React from 'react';
import Vehicle from './Vehicle.js';

export default function VehicleList(props) {
  return (
    <div className="traffic">
      {props.Vehicle.map(vehicle, i) => <Vehicle key={vehicle + i} vehicle={vehicle} />
      
    </div>
  );
}
