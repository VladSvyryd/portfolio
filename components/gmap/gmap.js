import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";

import { compose, withProps } from "recompose";
const gmap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCQOY4VJ86YDaBmHLCdy4CAVCciw8ErGDM&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 52.52, lng: 13.404 }
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
    <InfoBox
      defaultPosition={
        new google.maps.LatLng(props.center.lat + 6, props.center.lng - 12)
      }
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
      style={{ fontSize: "20px" }}
    >
      <div className="gmap_infobox">
        <div style={{ fontSize: `16px` }}>
          <p>Vladyslav Svyrydonov</p>
          <p>Germany, Berlin</p>
          <p>10825 Schöneberg</p>

          <p style={{ marginTop: "10px" }}>
            <span style={{ color: "#272641", fontWeight: "bold" }}>@</span> :
            vladonius@gmail.com
          </p>
        </div>
      </div>
    </InfoBox>
    {props.isMarkerShown && <Marker position={{ lat: 52.52, lng: 13.404 }} />}
  </GoogleMap>
));

export default gmap;
