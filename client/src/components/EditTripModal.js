import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ItineraryService from "../api/ItineraryControllerAPI";

function EditTripModal({ show, handleEditClose, itinerary }) {
  const [name, setName] = useState(itinerary?.name);
  const [country, setCountry] = useState(itinerary?.country);
  const [budget, setBudget] = useState(itinerary?.budget);
  const [startDate, setStartDate] = useState(itinerary?.startDate);
  const [endDate, setEndDate] = useState(itinerary?.endDate);

  const formatDate = (date) => {
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return formattedDate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (new Date(endDate) < new Date(startDate)) {
      alert("End date cannot be before start date!");
      return;
    }
    const newItinerary = {
      id: itinerary.id,
      name: name,
      user: { id: 1 },
      description: country,
      budget: budget,
      startDate: startDate,
      endDate: endDate,
    };

    handleEditClose(newItinerary);
  };

  return (
    <>
      {itinerary && (
        <div className="row mx-auto">
          <Modal centered show={show} onHide={() => handleEditClose(null)}>
            <Modal.Header closeButton>
              <Modal.Title>Update Trip Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Name of trip"
                    onChange={(e) => setName(e.target.value)}
                    defaultValue={itinerary.name}
                  />
                  <label>Name of trip</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Destination Country"
                    onChange={(e) => setCountry(e.target.value)}
                    defaultValue={itinerary.country}
                  />
                  <label>Destination Country</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    required
                    className="form-control"
                    placeholder="Total budget"
                    onChange={(e) => setBudget(e.target.value)}
                    defaultValue={itinerary.budget}
                  />
                  <label>Total budget</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    required
                    className="form-control"
                    placeholder="Start date of trip"
                    onChange={(e) => setStartDate(e.target.value)}
                    defaultValue={formatDate(itinerary.startDate)}
                  />
                  <label>Start date of trip</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    required
                    className="form-control"
                    placeholder="End date of trip"
                    onChange={(e) => setEndDate(e.target.value)}
                    defaultValue={formatDate(itinerary.endDate)}
                  />
                  <label>End date of trip</label>
                </div>
                <button
                  className="btn btn-primary text-white w-100"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Update Trip
                </button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
}

export default EditTripModal;