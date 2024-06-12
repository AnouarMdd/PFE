import React from "react";
import AddCampagnes from "./AddCampagnes";

function Hero({ selectedType, selectedYear, selectedStatus, onFilterChange }) {
  return (
    <div className="dropdown-container">
      <div style={{
        color: "grey",
        position: "relative",
        top: "10px",
        left: "20px",
        "@media screen and (max-width: 768px)": {
          top: "5px",
          left: "10px"
        }
      }}>
        Campagnes
      </div>

      <form className="max-w-sm mx-auto">
        <label htmlFor="type_select" className="sr-only">Type</label>
        <select
          id="type_select"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-black dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          value={selectedType}
          onChange={e => onFilterChange("type", e.target.value)}
        >
          <option value="">Type</option>
          <option value="Eaux de baignade">Eaux de baignade</option>
          <option value="AnotherType">Another Type</option>
          
        </select>
      </form>

      <form className="max-w-sm mx-auto">
        <label htmlFor="year_select" className="sr-only">Année</label>
        <select
          id="year_select"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-black dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          value={selectedYear}
          onChange={e => onFilterChange("year", e.target.value)}
        >
          <option value="">Année</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </form>

      <form className="max-w-sm mx-auto">
        <label htmlFor="status_select" className="sr-only">Statut</label>
        <select
          id="status_select"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-black dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          value={selectedStatus}
          onChange={e => onFilterChange("status", e.target.value)}
        >
          <option value="">Statut</option>
          <option value="Initialise">Initialise</option>
          <option value="Clôturées">Clôturées</option>
          <option value="Archivées">Archivées</option>
        </select>
      </form>
      <AddCampagnes />
    </div>
  );
}

export default Hero;
