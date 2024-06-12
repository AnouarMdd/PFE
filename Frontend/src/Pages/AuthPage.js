import React, { useState } from "react";

export default function DataTable() {
  const [data, setData] = useState([
    { plage: "Plage Lalla Meriem", station: "S1", id_station: "IDS1", date_prelevement: "2024/05/09", equipe: "Reda Idrissi" },
    { plage: "Plage Lalla Meriem", station: "S2", id_station: "IDS2", date_prelevement: "2024/05/09", equipe: "Amine PO" },
    { plage: "Plage Lalla Meriem", station: "S3", id_station: "IDS3", date_prelevement: "2024/05/09", equipe: "Karim AK" },
    { plage: "Plage Lalla Meriem", station: "S4", id_station: "IDS4", date_prelevement: "2024/05/09", equipe: "Taha Al" },
  ]);

  const handleEdit = (index) => {
    // Handle edit logic here
    alert(`Edit row ${index + 1}`);
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleCancel = () => {
    // Handle cancel logic here
    alert("Cancel clicked");
  };

  const handleSave = () => {
    // Handle save logic here
    alert("Save clicked");
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Plage</th>
            <th className="px-4 py-2 border-b">Station</th>
            <th className="px-4 py-2 border-b">ID Station</th>
            <th className="px-4 py-2 border-b">Date de prélèvement</th>
            <th className="px-4 py-2 border-b">Equipe</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{row.plage}</td>
              <td className="px-4 py-2">{row.station}</td>
              <td className="px-4 py-2">{row.id_station}</td>
              <td className="px-4 py-2">{row.date_prelevement}</td>
              <td className="px-4 py-2">{row.equipe}</td>
              <td className="px-4 py-2 flex justify-around">
                <button onClick={() => handleEdit(index)} className="text-blue-500 hover:text-blue-700">
                  ✏️
                </button>
                <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700">
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button onClick={handleCancel} className="bg-white text-black border border-black py-2 px-4 rounded mr-2">
          Annuler
        </button>
        <button onClick={handleSave} className="bg-green-500 text-white py-2 px-4 rounded">
          Enregistrer
        </button>
      </div>
    </div>
  );
}
