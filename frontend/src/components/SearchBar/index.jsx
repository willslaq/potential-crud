import { Grid, IconButton, InputBase } from '@material-ui/core';
import React, { useState } from 'react';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { useStyles } from './styles';

export default function SearchBar() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');

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
          <IconButton className={classes.searchButton}>
            <SearchRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
