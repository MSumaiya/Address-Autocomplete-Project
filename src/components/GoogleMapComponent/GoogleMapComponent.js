import React from "react";
import { Marker, GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "300px",
  height: "400px",
};

function GoogleMapComponent(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    /* googleMapsApiKey: "AIzaSyDR3E0Ko3uYrfQaqX9964woDyJ8NoDn4tg", */
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAP_API}`,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: +props.latitude, lng: +props.longitude }}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          position={{
            lat: +props.latitude,
            lng: +props.longitude,
          }}
        />
      </GoogleMap>
    
  ) : (
    <></>
  );
}

export default React.memo(GoogleMapComponent);
