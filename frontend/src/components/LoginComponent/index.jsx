import { Container } from '@material-ui/core';
import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';

import logo from '../../assets/developersLogo2.png';
import RoundedButton from '../RoundedButton';

import { useStyles } from './styles';

function LoginComponent() {
  const classes = useStyles();

  const history = useHistory();

  function goDevelopers() {
    history.push('/developers');
  }

  return (
    <Container className={classes.container}>
      <img src={logo} alt="developers.Hub()" className={classes.logo} />
      <div className={classes.buttonWrapper}>
        <RoundedButton
          color="primary"
          variant="contained"
          onClick={goDevelopers}
        >
          Acessar
        </RoundedButton>
      </div>
    </Container>
  );
}

export default withRouter(LoginComponent);
