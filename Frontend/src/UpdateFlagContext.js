import React, { createContext, useState } from 'react';

const UpdateFlagContext = createContext();

const UpdateFlagProvider = ({ children }) => {
  const [updateFlag, setUpdateFlag] = useState(false);

  return (
    <UpdateFlagContext.Provider value={{ updateFlag, setUpdateFlag }}>
      {children}
    </UpdateFlagContext.Provider>
  );
};

export { UpdateFlagContext, UpdateFlagProvider };