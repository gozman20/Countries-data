import React from "react";
import { Popup, MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapleaflet = ({ prop }) => {
  console.log(prop);
  const position = prop.latlng;
  console.log(position);
  return (
    <div className="grid place-items-center">
      <MapContainer
        center={prop.latlng}
        zoom={6}
        scrollWheelZoom={true}
        style={{ width: "80%", height: "400px" }}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapleaflet;
