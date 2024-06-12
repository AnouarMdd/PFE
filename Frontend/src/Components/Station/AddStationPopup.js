import React, { useState } from "react";
import axios from "axios";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id_zone: "",
    id_delegation: "",
    id_plage: "",
    ref_station: "",
    code_station: "",
    emplacement_station: "",
    id_position_station: "",
    latitude:"",
    longitude:""
  });

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/api/stations/add', formData);
      alert('Form submitted successfully!');
      setShowModal(false);
      setFormData({
        id_zone: "",
        id_delegation: "",
        id_plage: "",
        ref_station: "",
        code_station: "",
        emplacement_station: "",
        latitude:"",
        longitude:""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <button
        className="bg-white text-black active:bg-gray-300 text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ajouter Station
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ zIndex: 1000 }}>
          <div className="absolute inset-0 bg-black opacity-25" onClick={() => setShowModal(false)}></div>
          <div className="relative w-full max-w-3xl mx-auto my-6 bg-white rounded-lg shadow dark:bg-gray-700 p-6">
            <div className="flex items-start justify-between border-b border-gray-300 pb-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Nouvelle Station
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setShowModal(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label htmlFor="id_zone" className="block text-sm font-medium text-gray-700">Zone du littoral SAP</label>
                <select
                  name="id_zone"
                  id="id_zone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.id_zone}
                  onChange={handleChange}
                >
                  <option value="">Select Zone</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div>
                <label htmlFor="id_delegation" className="block text-sm font-medium text-gray-700">DP</label>
                <select
                  name="id_delegation"
                  id="id_delegation"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.id_delegation}
                  onChange={handleChange}
                >
                  <option value="">Select Delegation</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div>
                <label htmlFor="id_plage" className="block text-sm font-medium text-gray-700">Plage</label>
                <select
                  name="id_plage"
                  id="id_plage"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.id_plage}
                  onChange={handleChange}
                >
                  <option value="">Select Plage</option>
                  <option value="1">Plage 1</option>
                  <option value="2">Plage 2</option>
                  <option value="3">Plage 3</option>
                </select>
              </div>
              <div>
                <label htmlFor="ref_station" className="block text-sm font-medium text-gray-700">Ref Station</label>
                <input
                  type="text"
                  name="ref_station"
                  id="ref_station"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.ref_station}
                  onChange={handleChange}
                  placeholder="Ref Station"
                />
              </div>
              <div>
                <label htmlFor="code_station" className="block text-sm font-medium text-gray-700">Code Station</label>
                <input
                  type="text"
                  name="code_station"
                  id="code_station"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.code_station}
                  onChange={handleChange}
                  placeholder="Code Station"
                />
              </div>
              <div>
                <label htmlFor="emplacement_station" className="block text-sm font-medium text-gray-700">Emplacement</label>
                <input
                  type="text"
                  name="emplacement_station"
                  id="emplacement_station"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.emplacement_station}
                  onChange={handleChange}
                  placeholder="Emplacement"
                />
              </div>
              <div>
                <label htmlFor="latitude" className="block text-sm font-medium text-gray-700">latitude</label>
                <input
                  type="text"
                  name="latitude"
                  id="latitude"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.latitude}
                  onChange={handleChange}
                  placeholder="latitude"
                />
              </div>
              <div>
                <label htmlFor="longitude" className="block text-sm font-medium text-gray-700">longitude</label>
                <input
                  type="text"
                  name="longitude"
                  id="longitude"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.longitude}
                  onChange={handleChange}
                  placeholder="longitude"
                />
              </div>
              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                  Ajouter Station
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
