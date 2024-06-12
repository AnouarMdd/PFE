import React, { useState } from "react";
import axios from "axios";

const EditStation = ({ station, toggleModal }) => {
  const [formData, setFormData] = useState({
    code_station: station.code_station,
    commentaire_station: station.commentaire_station,
    // Add other fields as necessary
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8081/api/stations/${station.id_station}`, formData)
      .then(response => {
        console.log("Station updated:", response.data);
        toggleModal(); // Close the modal after updating
      })
      .catch(error => {
        console.error("There was an error updating the station!", error);
      });
  };

  return (
    <div className="modal-content">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Station</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="code_station" className="block text-sm font-medium text-gray-700">Code Station</label>
          <input
            type="text"
            name="code_station"
            id="code_station"
            value={formData.code_station}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="commentaire_station" className="block text-sm font-medium text-gray-700">Commentaire Station</label>
          <input
            type="text"
            name="commentaire_station"
            id="commentaire_station"
            value={formData.commentaire_station}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {/* Add more fields as needed */}
        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            onClick={toggleModal}
            className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStation;
