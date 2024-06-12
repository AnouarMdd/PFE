import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Component() {
  const [selectedCampagne, setSelectedCampagne] = useState(null);
  const {id} = useParams()

    const getCampagneById = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/campagnes/${id}`);
      setSelectedCampagne(response.data);
    } catch (error) {
      console.error(`Error fetching campagne with id ${id}:`, error);
    }
  };
  useEffect(() => {
    getCampagneById()
  }, [])

  return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">{`Campagnes > Suivi des eaux de baignade 2024`}</h2>
            <div className="mt-4">
              <div className="flex items-center">
                <div className="font-semibold">Nom de campagne</div>
                <div className="ml-4">{selectedCampagne?.nom_campagne}</div>
              </div>
              <div className="flex items-center mt-2">
                <div className="font-semibold">Date début</div>
                <div className="ml-4">{selectedCampagne?.date_debut}</div>
              </div>
              <div className="flex items-center mt-2">
                <div className="font-semibold">Date Fin</div>
                <div className="ml-4">{selectedCampagne?.date_fin}</div>
              </div>
              <div className="flex items-center mt-2">
                <div className="font-semibold">Type</div>
                <div className="ml-4">{selectedCampagne?.id_type_campagne}</div>
              </div>
              <div className="flex items-center mt-2">
                <div className="font-semibold">Description</div>
                <div className="ml-4"> {selectedCampagne?.description_campagne}</div>
              </div>
            </div>
            <div className="mt-4 text-green-600 cursor-pointer">Télécharger les fichiers joints</div>
          </div>
          {/* <div className="flex flex-col space-y-2">
            <Button className="bg-green-500 text-white">Démarrer</Button>
            <Button className="bg-green-500 text-white">Editer</Button>
            <Button className="bg-green-500 text-white">Supprimer</Button>
          </div> */}
        </div>
        <div className="mt-6 p-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold">Gestion des plannings</h3>
          <div className="mt-4 text-center">
            <p>Aucun planning n'a été attribué à la campagne, cliquer ici pour charger un planning</p>
          </div>
        </div>
      </div>
    )
  }
