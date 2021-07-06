import { Grid, IconButton, InputBase } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { useStyles } from './styles';
import api from '../../services/api';
import { DevelopersContext } from '../../providers/DevelopersContext';

export default function SearchBar() {
  const classes = useStyles();
  const { setDevelopers } = useContext(DevelopersContext);
  const [searchValue, setSearchValue] = useState('');

  async function fetchDevelopers() {
    const response = await api.get(`/developers?name=${searchValue}`);

    setDevelopers(response.data);
  }

  return (
    <>
      <Grid container className={classes.searchWrapper}>
        <Grid item>
          <div className={classes.search}>
            <InputBase
              placeholder="Pesquisar..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Grid>
        <Grid item>
          <IconButton
            className={classes.searchButton}
            onClick={fetchDevelopers}
          >
            <SearchRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
