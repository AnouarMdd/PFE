import React, { useState, useEffect, useCallback, useContext } from "react";
import axios from "axios";
import ButtonMenu from "./ButtonMenu";
import { UpdateFlagContext } from "../../UpdateFlagContext";


function CampagnesCards({ selectedType, selectedYear, selectedStatus }) {
  const [data, setData] = useState();

  const { updateFlag, setUpdateFlag } = useContext(UpdateFlagContext);

  const updateCampagne = useCallback(async (updatedCampagne) => {
    try {
      await axios.put(`http://localhost:8081/api/campagnes/update/${updatedCampagne.id_campagne}`, updatedCampagne);
      setUpdateFlag(!updateFlag)
    } catch (error) {
      console.error("Error updating campagne:", error);
    }
  });
  
    const deleteCampagne = useCallback(async (id_campagne) => {
      try {
        await axios.delete(`http://localhost:8081/api/campagnes/delete/${id_campagne}`);
        setUpdateFlag(!updateFlag)
      } catch (error) {
        console.error("Error deleting campagne:", error);
      }
    }, []);

  const handleChangeCategory = (item, newCategory) => {
    const updatedCampagne = { ...item, category: newCategory };
    updateCampagne(updatedCampagne);
  };

  const fetchCampagnes = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/campagnes/getAll");
      response.data = response.data.filter((item) => {
        return (
          (selectedType ? item.id_type_campagne === selectedType : true) &&
          (selectedYear ? new Date(item.date_debut).getFullYear() === parseInt(selectedYear) : true) &&
          (selectedStatus ? item.category === selectedStatus : true)
        );
      });
      setData(response.data);

    } catch (error) {
      console.error("Error fetching campagnes:", error);
    }
  }, [selectedType, selectedYear, selectedStatus]);


  useEffect(() => {
    fetchCampagnes();
    console.log('fetchCampagnes');
  }, [updateFlag, selectedType, selectedYear, selectedStatus]);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {["Initialise", "Clôturées", "Archivées"].map((category) => (
          <div key={category} className="bg-white shadow rounded-lg p-4 w-[350px]">
            <h2 className="text-lg font-semibold mb-4">{category}</h2>
            <div className="space-y-2">
              {Array.isArray(data) &&
                data.filter((item) => item.category === category).map((item, index) => (
                  <div className="border-b pb-2 relative" key={index}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{item.description_campagne}</h3>
                        <p>Date début: {item.date_debut}</p>
                        <p>Date Fin: {item.date_fin}</p>
                        <p>Type: {item.id_type_campagne}</p>
                      </div>
                      <ButtonMenu
                        item={item}
                        category={category}
                        onChangeCategory={handleChangeCategory}
                        onDelete={deleteCampagne}
                        data={item}
                        setUpdateFlag={setUpdateFlag}
                        updateFlag={updateFlag}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CampagnesCards;
