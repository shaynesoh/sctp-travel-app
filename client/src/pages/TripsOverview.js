import React, { useState, useEffect } from "react";
import CreateTripModal from "../components/CreateTripModal";
import TripList from "../components/TripList";
import adminLayout from "../hoc/adminLayout";
import Button from "react-bootstrap/esm/Button";

function TripsOverview() {
  const [tripList, setTripList] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const storedTripList = JSON.parse(localStorage.getItem('tripList'));
    if (storedTripList) {
      setTripList(storedTripList);
    };
  }, []);

  const deleteTrip = (index) => {
    const newTripList = tripList.filter((trip, i) => i !== index);
    setTripList(newTripList);
    localStorage.setItem('tripList', JSON.stringify(newTripList));
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="container">
        <div className='row text-center p-5'>
          <h1>My Trips</h1>
        </div>
        <div className="row">
          {tripList.map((trip, index) => (
              <TripList {...trip} key={index} index={index} setTripList={setTripList} deleteTrip={deleteTrip} />
          ))}
        </div>
        <div className="row mx-auto">
          <Button className="d-flex and justify-content-center text-white" variant="primary" size="lg" onClick={handleShow}>
            Create a new trip +
          </Button>
        </div>
        <CreateTripModal show={show} handleClose={handleClose} handleShow={handleShow} setTripList={setTripList} />
      </div>
    </>
  );
}

export default adminLayout(TripsOverview);
