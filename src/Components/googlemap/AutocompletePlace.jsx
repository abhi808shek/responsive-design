
import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
  // display: 'none'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Autocomplete() {
  const [searchBox, setSearchBox] = useState(null);

  const onLoad = (ref) => {
    setSearchBox(ref)
  };

  console.log("serch box", searchBox)

  const onPlacesChanged = () => {
    console.log(searchBox.getPlaces());
  };
  return (
    <>
      {window.google === undefined ? (
        <LoadScript
          libraries={[["places"]]}
          // googleMapsApiKey="AlzaSyCxfRNiw6DgtJadpT7aVO2lt8rVhaiGCxO"
          // googleMapsApiKey='AlzaSyAcJzppx6PHvFiGQlP3HXcC21cgDATqAoE'
          // googleMapsApiKey='AIzaSyCm0bUdRDZL9DmCxxDyFxCv9YYoGixvYko'
          // AIzaSyCxfRNiw6DgtJadpT7qVO2It8rVhaiGCx0
          // googleMapsApiKey="AIzaSyD2t7ciNg4QST3zXCjSJVuQapFEhBTLo_E"
          googleMapsApiKey="AIzaSyDVh55QHg4bqcLPZeU8EhAgw-wX0tdowMU"
        >
          <GoogleMap
            id="searchbox-example"
            mapContainerStyle={containerStyle}
            zoom={0}
            center={center}
          >
            <StandaloneSearchBox
              onLoad={onLoad}
              onPlacesChanged={onPlacesChanged}
            >
              <input
                type="text"
                placeholder="Customized your placeholder"
                style={{
                  boxSizing: `border-box`,
                  border: `1px solid transparent`,
                  width: `240px`,
                  height: `32px`,
                  padding: `0 12px`,
                  borderRadius: `3px`,
                  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                  fontSize: `14px`,
                  outline: `none`,
                  textOverflow: `ellipses`,
                  position: "absolute",
                  left: "50%",
                  marginLeft: "-120px",
                }}
              />
            </StandaloneSearchBox>
          </GoogleMap>
        </LoadScript>
      ) : (
        <GoogleMap
          id="searchbox-example"
          mapContainerStyle={containerStyle}
          zoom={2.5}
          center={center}
        >
          <StandaloneSearchBox
            onLoad={onLoad}
            onPlacesChanged={onPlacesChanged}
          >
            <input
              type="text"
              placeholder="Customized your placeholder"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px",
              }}
            />
          </StandaloneSearchBox>
        </GoogleMap>
      )}
    </>
  );
}

export default React.memo(Autocomplete)