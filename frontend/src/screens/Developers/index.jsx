import React from 'react';
import { Container } from '@material-ui/core';
import DevelopersList from '../../components/DevelopersList';
import SearchBar from '../../components/SearchBar';
import logo from '../../assets/developersLogo2.png';
import { useStyles } from './styles';
import NewDeveloper from '../../components/NewDeveloper';

export default function Developers() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.logoWrapper}>
        <img src={logo} alt="logo" className={classes.logo} />
      </div>
      <SearchBar />
      <Container maxWidth="md">
        <DevelopersList />
      </Container>
      <NewDeveloper />
    </>
  );
}
