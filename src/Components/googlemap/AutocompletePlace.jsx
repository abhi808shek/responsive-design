import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Autocomplete() {
  return (
    <LoadScript
      googleMapsApiKey="AlzaSyCxfRNiw6DgtJadpT7aVO2lt8rVhaiGCxO"
    // googleMapsApiKey='AlzaSyAcJzppx6PHvFiGQlP3HXcC21cgDATqAoE'
    // googleMapsApiKey='AIzaSyCm0bUdRDZL9DmCxxDyFxCv9YYoGixvYko'
    // AIzaSyCxfRNiw6DgtJadpT7qVO2It8rVhaiGCx0
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Autocomplete)