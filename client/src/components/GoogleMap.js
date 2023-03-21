import React from 'react';

const GoogleMap = ({ location }) => {
  if (!location) {
    return null;
  }

  const { lat, lng } = location.geometry.location;

  return (
    <div>
      <iframe
        title="Google Map"
        width="100%"
        height="200"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}=${lat},${lng}&zoom=16`}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default GoogleMap;
