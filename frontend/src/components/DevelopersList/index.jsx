import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import DeveloperCard from '../DeveloperCard';

export default function DevelopersList() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    async function fetchDevelopers() {
      const response = await api.get('/developers');
      setDevelopers(response.data);
    }

    fetchDevelopers();
  }, []);

  return (
    <>
      {developers && developers.map((developer) => (
        <DeveloperCard
          key={developer.id}
          id={developer.id}
          name={developer.name}
          gender={developer.gender}
          age={developer.age}
          hobby={developer.hobby}
          birthDate={developer.birthDate}
        />
      ))}
    </>
  );
}
