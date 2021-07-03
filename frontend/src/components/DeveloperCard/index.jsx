import React from 'react';
import {
  Grid, Paper, Typography,
} from '@material-ui/core';

import avatar1 from '../../assets/avatars/avatar1.jpg';
import avatar2 from '../../assets/avatars/avatar2.jpg';
import avatar3 from '../../assets/avatars/avatar3.jpg';
import avatar4 from '../../assets/avatars/avatar4.jpg';
import { useStyles } from './styles';
import DevDataModal from '../DeveloperModal/inde';

// import api from '../../services/api';

const imagesToRandomize = {
  1: avatar1,
  2: avatar2,
  3: avatar3,
  4: avatar4,
};

function DeveloperCard(props) {
  const classes = useStyles();

  const {
    // id,
    name,
    // gender,
    age,
    // hobby,
    //  birthDate,
  } = props;

  function randomizeImage(min, max) {
    const minTemp = Math.ceil(min);
    const maxTemp = Math.floor(max);
    return Math.floor(Math.random() * (maxTemp - minTemp)) + minTemp;
  }

  // function fetchSingleProduct(id) {
  //   api.get(`/developers/`);
  // }

  return (
    <Paper className={classes.container}>
      <Grid container>
        <Grid item xs={4}>
          <img
            src={imagesToRandomize[randomizeImage(1, 4)]}
            alt="Avatar"
            className={classes.cardImage}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            {`${name}, ${age}`}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <DevDataModal />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DeveloperCard;
