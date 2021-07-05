import DateFnsUtils from '@date-io/date-fns';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useContext, useState } from 'react';
import { DevelopersContext } from '../../providers/DevelopersContext';
import api from '../../services/api';
import RoundedButton from '../RoundedButton';
import { useStyles } from './styles';

export default function NewDeveloper() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [hobby, setHobby] = useState();
  const [birthDate, setBirthDate] = useState();
  const classes = useStyles();

  const { developers, setDevelopers } = useContext(DevelopersContext);

  const handleClickOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function save() {
    const data = {
      name,
      gender,
      hobby,
      birthDate,
    };
    const response = api.post('/developers', data);
    setOpen(false);
    setDevelopers([...developers, response.data]);
    return response;
  }

  return (
    <>
      <IconButton onClick={handleClickOpen} className={classes.addButton}>
        <AddRoundedIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Desenvolvedor</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                label="Nome"
                value={name}
                fullWidth
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Gênero"
                value={gender}
                fullWidth
                onChange={(e) => setGender(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Hobby"
                multiline
                value={hobby}
                fullWidth
                onChange={(e) => setHobby(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={birthDate}
                  onChange={(date) => {
                    setBirthDate(date);
                  }}
                  KeyboardButtonProps={{
                    'aria-label': 'Data',
                  }}
                />
              </MuiPickersUtilsProvider>
              {/* <TextField
                label="Data de nascimento"
                value={birthDate}
                fullWidth
                onChange={(e) => setBirthDate(e.target.value)}
              /> */}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid item xs={6}>
            <RoundedButton
              onClick={() => setOpen(false)}
              color="secondary"
              fullWidth
            >
              Cancelar
            </RoundedButton>
          </Grid>
          <Grid item xs={6}>
            <RoundedButton
              variant="contained"
              color="primary"
              onClick={save}
              fullWidth
            >
              Salvar
            </RoundedButton>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
}
