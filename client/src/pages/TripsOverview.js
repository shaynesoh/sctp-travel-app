import React, { useState, useEffect } from "react";
import CreateTripModal from "../components/CreateTripModal";
import TripList from "../components/TripList";
import adminLayout from "../hoc/adminLayout";
import Button from "react-bootstrap/esm/Button";
import ItineraryService from "../api/ItineraryControllerAPI"

function TripsOverview() {
  const [tripList, setTripList] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const itineraries = await ItineraryService.getAllItineraries();
      const trips = itineraries.map((itinerary) => ({
        name: itinerary.name,
        country: itinerary.description,
        budget: itinerary.budget,
        startDate: new Date(itinerary.startDate).toLocaleDateString('en-UK', { day: '2-digit', month: 'short' }),
        endDate: new Date(itinerary.endDate).toLocaleDateString('en-UK', { day: '2-digit', month: 'short' }),
        index: itinerary.id,
      }));
      setTripList(trips);
    };
    fetchData();
  }, [tripList]);

  const deleteTrip = (index) => {
    ItineraryService.deleteItinerary(index);
  }

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container">
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
