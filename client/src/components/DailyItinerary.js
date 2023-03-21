import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DailyItinerary({ day }) {
  return (
    <Card>
      <Card.Header>Day {day.dayNumber}</Card.Header>
      <Card.Body>
        <Card.Title>
          <ul>
            {day.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul></Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Add a place +</Button>
      </Card.Body>
    </Card>
  );
}

export default DailyItinerary;
