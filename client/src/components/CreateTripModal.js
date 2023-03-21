import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function CreateTripModal({ show, handleClose, setTripList }) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = { name, country, startDate, endDate };
    setTripList(prevTripList => [...prevTripList, newTrip]);
    handleClose();
    const storedTripList = JSON.parse(localStorage.getItem('tripList')) || [];
    const updatedTripList = [...storedTripList, newTrip];
    localStorage.setItem('tripList', JSON.stringify(updatedTripList));
  };
  
  return (
    <>
      <div class="row mx-auto">

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
            <div className="form-floating mb-3">
              <input type="text" required className="form-control" placeholder="Destination Country" onChange={(e) => setCountry(e.target.value)} />
              <label>Destination Country</label>
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
