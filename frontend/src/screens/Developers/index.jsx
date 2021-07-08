import React from 'react';
import { Container } from '@material-ui/core';
import DevelopersList from '../../components/DevelopersList';
import SearchBar from '../../components/SearchBar';
import logo from '../../assets/developersLogo2.png';
import { useStyles } from './styles';
import NewDeveloper from '../../components/NewDeveloper';
import { DevelopersProvider } from '../../providers/DevelopersContext';

export default function Developers() {
  const classes = useStyles();
  return (
    <>
      <DevelopersProvider>
        <div className={classes.logoWrapper}>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
        <SearchBar />
        <Container maxWidth="md" style={{ paddingBottom: 20 }}>
          <DevelopersList />
        </Container>
        <NewDeveloper />
      </DevelopersProvider>
    </>
  );
}
