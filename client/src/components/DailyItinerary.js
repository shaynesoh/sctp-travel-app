import { Card, Button, CardGroup } from "react-bootstrap";
import { useState } from "react";
import ItemCard from "./ItemCard";
function DailyItinerary({
  dayNumber,
  name,
  description,
  destination,
  accommodation,
  transport,
}) {
  console.log(destination);
  let destItem;
  if (destination != undefined) {
    destItem = {
      name: destination?.city + ", " + destination?.country,
      description: destination?.description,
      image: destination?.image,
      price: accommodation?.price + transport?.price,
    };
  }
  return (
    <Card className="mb-3 border rounded">
      <Card.Header>Day {dayNumber}</Card.Header>
      <Card.Body>
        <div className="d-flex" style={{ height: "18rem" }}>
          <div className="w-50 h-100 ">
            <ItemCard item={destItem} altText="Add destination" />
          </div>
          <div className="w-50">
            <CardGroup className="h-100">
              <ItemCard item={accommodation} altText="Add accommodation" />
              <ItemCard item={transport} altText="Add transport" />
            </CardGroup>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DailyItinerary;
