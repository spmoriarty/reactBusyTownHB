export default function Vehicle({ vehicle }) {
  return <div className="vehicle">
    {/* the Vehcile component has a prop called vehicle. Check to see what string is in this vehicle prop */}
    <p>
      {vehicle === 'car' && '🚗'}
    </p>
    {/* if the vehicle vehicle is a car, render a '🚗' emoji */}
    <p>
      {vehicle === 'truck' && '🚚'}
    </p>
    {/* if the vehicle vehicle is a truck, render a '🚚' emoji */}
    <p>
      {vehicle === 'bus' && '🚌'}
    </p>
    {/* if the vehicle vehicle is a bus, render a '🚌' emoji */}
    <p>
      {vehicle === 'motorcycle' && '🏍️'}
    </p>
    {/* if the vehicle vehicle is a motorcycle, render a '🏍️' emoji */}
  
  </div>;
}