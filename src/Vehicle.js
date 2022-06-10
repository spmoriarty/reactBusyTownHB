export default function Vehicle(props) {
  return <div className="vehicle">
    {/* the Vehcile component has a prop called vehicle. Check to see what string is in this vehicle prop */}
    <p>
      {props.Vehicle === 'car' && '🚗'}
    </p>
    {/* if the vehicle props is a car, render a '🚗' emoji */}
    <p>
      {props.Vehicle === 'truck' && '🚚'}
    </p>
    {/* if the vehicle props is a truck, render a '🚚' emoji */}
    <p>
      {props.Vehicle === 'bus' && '🚌'}
    </p>
    {/* if the vehicle props is a bus, render a '🚌' emoji */}
    <p>
      {props.Vehicle === 'motorcycle' && '🏍️'}
    </p>
    {/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}
  
  </div>;
}