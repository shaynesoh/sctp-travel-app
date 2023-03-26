import { Button, Card } from "react-bootstrap";

function ItemCard({ item, altText }) {
  return (
    <Card className="shadow border h-100 m-1">
      {item === undefined ? (
        <div className="h-100 container d-flex justify-content-center align-items-center">
          <div className="align-items-center">
            <Button variant="primary">{altText}</Button>
          </div>
        </div>
      ) : (
        <>
          <Card.Img
            src={item?.image}
            alt="Card image"
            className="w-100 h-100 rounded"
            style={{ objectFit: "cover" }}
          />
          <Card.ImgOverlay className="h-25 bg-light opacity-75 m-2">
            <div className="d-flex justify-content-between align-items-start">
              <em className="fw-semibold col">{item?.name}</em>
              <small className="fw-light">${item?.price}</small>
            </div>
            <p>
              <small>{item?.description}</small>
            </p>
          </Card.ImgOverlay>
        </>
      )}
    </Card>
  );
}

export default ItemCard;
