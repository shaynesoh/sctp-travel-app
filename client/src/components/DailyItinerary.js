import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function DailyItinerary({ day, onAddDestination }) {
  const [destination, setDestination] = useState('');
  const [destinations, setDestinations] = useState([]);

  const handleAddDestination = (e) => {
    e.preventDefault();
    if (destination.trim() !== '') {
      setDestinations([...destinations, destination]);
      onAddDestination(day.dayNumber, [...destinations, destination]);
      setDestination('');
    }
  };
  
  const handleRemoveDestination = (index) => {
    const updatedDestinations = [...destinations];
    updatedDestinations.splice(index, 1);
    setDestinations(updatedDestinations);
    onAddDestination(day.dayNumber, updatedDestinations);
  };

  return (
    <Card className="mb-3">
      <Card.Header>Day {day.dayNumber}</Card.Header>
      <Card.Body>
        <Card.Title>
          <ul>
            {destinations.map((destination, index) => (
              <li key={index}>
                <div class="d-flex justify-content-between align-items-center">
                  {destination}
                  <button type="button" class="btn btn-link" onClick={() => handleRemoveDestination(index)}>
                    <span><i class="bi bi-x link-danger"></i></span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </Card.Title>
        <Card.Text>
          <form onSubmit={handleAddDestination}>
            <input type="text" className="form-control" placeholder="Enter a destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
            {/* <button className="btn btn-primary text-white w-100 mt-3" type="submit">
              Add destination +
            </button> */}
          </form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DailyItinerary;
