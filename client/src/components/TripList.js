import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function TripList({ name, country, startDate, endDate, index, setTripList, deleteTrip }) {

  const handleDelete = () => {
    deleteTrip(index);
  }
  
  return (
    <>
        <div className="col-xl-4 col-sm-6 mb-3">
          <div className="card h-100 shadow-sm bg-white rounded">
            <div className="card-body">
              <div className="mr-5 mb-3"><h2>{name}</h2></div>
              <div className="mr-5">{country}</div>
              <div className="mr-5">{startDate} to {endDate}</div>
            </div>
            <div className="card-footer clearfix small z-1 d-flex align-items-center justify-content-between" href="#">
            <div>
              <span className="float-left"><Link to={`/trips/${index}`}>View Details</Link> </span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </div>
            <Button variant="dark" onClick={handleDelete}>Delete</Button>
            </div>
          </div>
        </div>
    </>
  );
}

export default TripList;
