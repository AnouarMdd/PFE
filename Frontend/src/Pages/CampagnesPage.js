import React, { useState } from "react";
import Hero from "../Components/Campagnes/Hero";
import CampagnesCards from "../Components/Campagnes/CampagnesCards";

const CampagnesPage = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "type":
        setSelectedType(value);
        break;
      case "year":
        setSelectedYear(value);
        break;
      case "status":
        setSelectedStatus(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Hero
        selectedType={selectedType}
        selectedYear={selectedYear}
        selectedStatus={selectedStatus}
        onFilterChange={handleFilterChange}
      />
      <CampagnesCards
        selectedType={selectedType}
        selectedYear={selectedYear}
        selectedStatus={selectedStatus}
      />
    </div>
  );
};

export default CampagnesPage;
