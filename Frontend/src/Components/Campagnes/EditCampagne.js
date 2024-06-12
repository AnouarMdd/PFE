import React, { useState  } from "react";
import axios from "axios";

export default function Modal({ showModal, setShowModal, item, setOpen , setUpdateFlag, updateFlag}) {
  const [formData, setFormData] = useState({
    nom_campagne: item.nom_campagne || "",
        date_debut: item.date_debut || "",
        date_fin: item.date_fin || "",
        id_type_campagne: item.id_type_campagne || "",  
        description_campagne: item.description_campagne || ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    formData.category = item.category
      await axios.put(`http://localhost:8081/api/campagnes/update/${item.id_campagne}`, formData);
      alert('Form submitted successfully!');
      setFormData({
        nom_campagne: "",
        date_debut: "",
        date_fin: "",
        id_type_campagne: "",
        description_campagne: ""
      });
      setShowModal(false);
      setOpen(false);
      setUpdateFlag(!updateFlag);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <>
      {showModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-auto mx-auto max-w-3xl">
              <form onSubmit={handleSubmit}>
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-3xl font-semibold">Edit Campagnes</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <div className="mb-4">
                      <input
                        className="form-control w-full px-3 py-2 border rounded"
                        type="text"
                        value={formData.nom_campagne}
                        onChange={handleChange}
                        name="nom_campagne"
                        placeholder="Nom de campagne"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="form-control w-full px-3 py-2 border rounded"
                        type="date"
                        value={formData.date_debut}
                        onChange={handleChange}
                        name="date_debut"
                        placeholder="Date de début"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="form-control w-full px-3 py-2 border rounded"
                        type="date"
                        value={formData.date_fin}
                        onChange={handleChange}
                        name="date_fin"
                        placeholder="Date de fin"
                      />
                    </div>
                    <div className="mb-4">
                      <select
                        name="id_type_campagne"
                        className="form-control w-full px-3 py-2 border rounded"
                        value={formData.id_type_campagne}
                        onChange={handleChange}
                      >
                        <option value="">Type</option>
                        <option value="Eaux de baignade">Eaux de baignade</option>
                        <option value="Eaux de baignade">Eaux de baignade</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <input
                        className="form-control w-full px-3 py-2 border rounded"
                        type="text"
                        value={formData.description_campagne}
                        onChange={handleChange}
                        name="description_campagne"
                        placeholder="Description"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">
                        Joindre des fichiers
                      </label>
                      <input
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded cursor-pointer focus:outline-none"
                        id="file_input"
                        type="file"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className=" bg-blue-500 text-white hover:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Ajouter Campagnes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
