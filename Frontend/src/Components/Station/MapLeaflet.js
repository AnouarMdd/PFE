import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "./MapLeaflet.css";
import EditStation from "./EditStation";


function Maptest() {
  const [stations, setStations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentStation, setCurrentStation] = useState(null);

  const position = [33.5945144, -7.6200284];

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        alert(`lat: ${e.latlng.lat}, long: ${e.latlng.lng}`);
      },
    });
    return null;
  };

  useEffect(() => {
    axios.get("http://localhost:8081/api/stations/all")
      .then(response => {
        console.log("Fetched stations:", response.data);
        setStations(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the stations!", error);
      });
  }, [stations]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleEditClick = (station) => {
    setCurrentStation(station);
    toggleModal();
  };

  return (
    <>
      <div className="map">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {stations.length > 0 ? stations.map(station => (
            station.latitude && station.longitude ? (
              <Marker key={station.id_station} position={[station.latitude, station.longitude]}>
                <Popup>
                  {station.code_station}<br />
                  {station.commentaire_station}<br />
                  <button 
                    onClick={() => handleEditClick(station)} 
                    className="edit-button"
                  >
                    Edit
                  </button>
                </Popup>
              </Marker>
            ) : (
              console.warn(`Station ${station.id_station} is missing latitude or longitude`, station)
            )
          )) : (
            <p>No stations available</p>
          )}
          <MapEvents />
        </MapContainer>
      </div>
      {showModal && currentStation && (
        <div id="medium-modal" tabIndex="-1" style={{ zIndex: 9999 }} className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-gray-800 bg-opacity-50">
          <div className="relative w-full max-w-lg max-h-full m-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Station</h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="medium-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <EditStation station={currentStation} toggleModal={toggleModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default Maptest;
