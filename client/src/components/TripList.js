import { React, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import DeleteTripModal from "./DeleteTripModal";
import { Card } from "react-bootstrap";
import EditTripModal from "./EditTripModal";

function TripList({ itinerary, index, handleDelete, handleEdit }) {
  const { name, country, budget, startDate, endDate, id } = itinerary;
  const formattedStartDate = new Date(itinerary.startDate).toLocaleDateString(
    "en-UK",
    {
      day: "2-digit",
      month: "short",
    }
  );

  const formattedEndDate = new Date(itinerary.endDate).toLocaleDateString(
    "en-UK",
    {
      day: "2-digit",
      month: "short",
    }
  );

  return (
    <>
      <div className="col-xl-4 col-sm-6 mb-3">
        <Card className=" h-100 shadow-sm bg-white rounded">
          <Card.Body>
            <div className="d-flex justify-content-between">
              <h2 className="mb-3">{name}</h2>
              <Button onClick={() => handleEdit(index)}>
                <i className="bi bi-pencil"></i>
              </Button>
            </div>
            <div className="d-flex">
              <div className="col-6">
                <div className="mr-5">{country}</div>
                <div className="mr-5">
                  {formattedStartDate} to {formattedEndDate}
                </div>
              </div>
              <div className="col-6">
                <div className="mr-5">$ {budget}</div>
              </div>
            </div>
          </Card.Body>
          <Card.Footer className=" clearfix small z-1 d-flex align-items-center justify-content-between">
            <div>
              <Link to={`/trips/${id}`} className="pe-2 pt-3 pb-3">
                View Details <i className="fa fa-angle-right"></i>
              </Link>{" "}
            </div>
            <Button variant="dark" onClick={() => handleDelete(index)}>
              Delete
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
}

export default TripList;