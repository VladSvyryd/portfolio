import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps } from "recompose";
const gmap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDun02OBa__N_2cSmW2tXhQeW-c8BpnUVo&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 52.52, lng: 13.404 }}
    defaultOptions={{
      styles: props.mapStyles,
      fullscreenControl: false,
      streetViewControl: false,
      scaleControl: false,
      zoomControl: false,
      maxZoom: 11,
      mapTypeControl: false
    }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 52.52, lng: 13.404 }} />}
  </GoogleMap>
));

export default gmap;
