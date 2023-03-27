import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Autocomplete from "react-google-autocomplete";
import ReactGoogleAutocomplete from 'react-google-autocomplete';
import ItineraryService from "../api/ItineraryControllerAPI";

function CreateTripModal({ show, handleClose, fetchData }) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [budget, setBudget] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (new Date(endDate) < new Date(startDate)) {
      alert('End date cannot be before start date!');
      return;
    }
    const newItinerary = {
      name: name,
      user: {"id":1},
      description: country,
      budget: budget,
      startDate: startDate,
      endDate: endDate
    };

    console.log(newItinerary);

    ItineraryService.addItinerary(newItinerary)
      .then(() => {
        fetchData();
        handleClose();
      })
      .catch(error => {
        console.log(error);
      })
    handleClose();
  };

  return (
    <>
      <div className="row mx-auto">

        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Plan a new trip</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input type="text" required className="form-control" placeholder="Name of trip" onChange={(e) => setName(e.target.value)} />
                <label>Name of trip</label>
              </div>
              {/* <div className="form-floating mb-3">
                <ReactGoogleAutocomplete
                  apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                  onPlaceSelected={(place) => setCountry(place.address_components[0].long_name)}
                  options={{
                    types: ['(regions)'],
                    componentRestrictions: { country: 'sg' }
                  }}
                  placeholder="Destination Country"
                  inputClassName="form-control"
                />
              </div> */}
              <div className="form-floating mb-3">
                <input type="text" required className="form-control" placeholder="Destination Country" onChange={(e) => setCountry(e.target.value)} />
                <label>Destination Country</label>
              </div>
              <div className="form-floating mb-3">
                <input type="number" required className="form-control" placeholder="Total budget" onChange={(e) => setBudget(e.target.value)} />
                <label>Total budget</label>
              </div>
              <div className="form-floating mb-3">
                <input type="date" required className="form-control" placeholder="Start date of trip" onChange={(e) => setStartDate(e.target.value)} />
                <label>Start date of trip</label>
              </div>
              <div className="form-floating mb-3">
                <input type="date" required className="form-control" placeholder="End date of trip" onChange={(e) => setEndDate(e.target.value)} />
                <label>End date of trip</label>
              </div>
              <button className="btn btn-primary text-white w-100" type="submit">
                Create new trip
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default CreateTripModal;
