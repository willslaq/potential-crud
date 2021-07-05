import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { DevelopersContext } from '../../providers/DevelopersContext';
import DeveloperCard from '../DeveloperCard';

export default function DevelopersList() {
  const { developers } = useContext(DevelopersContext);

  return (
    <>
      {developers ? (
        developers.map((developer) => (
          <DeveloperCard
            key={developer.id}
            id={developer.id}
            name={developer.name}
            gender={developer.gender}
            age={developer.age}
            hobby={developer.hobby}
            birthDate={developer.birthDate}
          />
        ))
      ) : (
        <Typography>Cadastre um novo desenvolvedor</Typography>
      )}
    </>
  );
}
