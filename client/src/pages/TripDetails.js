import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import adminLayout from "../hoc/adminLayout";
import GoogleMap from '../components/GoogleMap';
import DailyItinerary from '../components/DailyItinerary';

function TripDetails() {
  const { index } = useParams();
  const storedTripList = JSON.parse(localStorage.getItem('tripList'));
  const trip = storedTripList[index];

  const days = [];
  const start = new Date(trip.startDate);
  const end = new Date(trip.endDate);
  const dayCount = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  for (let i = 1; i <= dayCount; i++) {
    days.push({
      dayNumber: i,
      activities: []
    });
  }

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="row align-items-center">
              <div class="col-sm">
                <h1 class="font-weight-bold">{trip.name}</h1>
              </div>
              <div class="col-sm text-right">
                <button type="button" class="btn btn-link">
                  <h1><i class="bi bi-pencil-square"></i></h1>
                </button>
              </div>
            </div>
            <p>{trip.country}</p>
            <p>{trip.startDate} to {trip.endDate}</p>
            <div>
              {days.map((day, index) => (
                <DailyItinerary day={day} key={index} />
              ))}
            </div>
          </div>
          <div class="col-sm">
            <GoogleMap />
          </div>
        </div>
      </div>
    </>
  );
}

export default adminLayout(TripDetails);
