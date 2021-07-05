import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export const DevelopersContext = createContext({});

export const DevelopersProvider = (props) => {
  const [developers, setDevelopers] = useState([]);
  const { children } = props;

  useEffect(() => {
    async function fetchDevelopers() {
      const response = await api.get('/developers');
      setDevelopers(response.data);
    }

    fetchDevelopers();
  }, []);

  return (
    <DevelopersContext.Provider
      value={{
        developers,
        setDevelopers,
      }}
    >
      {children}
    </DevelopersContext.Provider>
  );
};
