import { Card, Button, CardGroup } from "react-bootstrap";
import { useState } from "react";
import ItemCard from "./ItemCard";
import EditSubItemModal from "./EditSubItemModal";

function DailyItinerary({
  id,
  dayNumber,
  name,
  description,
  destination,
  accommodation,
  transport,
  fetchData,
  itineraryId,
}) {
  const [showEdit, setShowEdit] = useState(false);
  const [subItemToEdit, setSubItemToEdit] = useState(null);
  const [typetoEdit, setTypeToEdit] = useState(null);

  const handleEdit = (item, itemType) => {
    setTypeToEdit(itemType);
    setSubItemToEdit(item);
    setShowEdit(true);
  };

  const handleEditClose = () => {
    setShowEdit(false);
  };

  return (
    <>
      {showEdit && (
        <EditSubItemModal
          show={showEdit}
          handleClose={handleEditClose}
          itineraryItemId={id}
          subItemToEdit={subItemToEdit}
          subItemType={typetoEdit}
          fetchData={fetchData}
          itineraryId={itineraryId}
        />
      )}
      <Card className="mb-3 border rounded">
        <Card.Header>Day {dayNumber}</Card.Header>
        <Card.Body>
          <div className="d-flex" style={{ height: "18rem" }}>
            <div className="w-50 h-100 ">
              <ItemCard
                item={destination}
                altText="Add destination"
                itemType="destination"
                itineraryItemId={id}
                handleEdit={handleEdit}
              />
            </div>
            <div className="w-50">
              <CardGroup className="h-100">
                <ItemCard
                  item={accommodation}
                  altText="Add accommodation"
                  itemType="accommodation"
                  itineraryItemId={id}
                  handleEdit={handleEdit}
                />
                <ItemCard
                  item={transport}
                  altText="Add transport"
                  itemType="transport"
                  itineraryItemId={id}
                  handleEdit={handleEdit}
                />
              </CardGroup>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
export default DailyItinerary;
