import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from '@material-ui/core';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import RoundedButton from '../RoundedButton';
import { useStyles } from './styles';

export default function DeveloperModal({ id }) {
  const [open, setOpen] = useState(false);
  const [developer, setDeveloper] = useState({});
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [hobby, setHobby] = useState();
  const [birthDate, setBirthDate] = useState();
  const classes = useStyles();

  useEffect(() => {
    if (developer) {
      setName(developer.name);
      setGender(developer.gender);
      setHobby(developer.hobby);
      setBirthDate(developer.birthDate);
    }
  }, [developer]);

  async function fetchDeveloper(idToFetch) {
    const response = await api.get(`/developers/${idToFetch}`);
    setDeveloper(response.data);
  }

  const handleClickOpen = async () => {
    await fetchDeveloper(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function saveUpdate() {
    const data = {
      name,
      gender,
      hobby,
      birthDate,
    };
    const response = api.put(`/developers/${id}`, data);
    setOpen(false);
    return response;
  }

  return (
    <>
      <IconButton onClick={handleClickOpen} className={classes.button}>
        <EditRoundedIcon />
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
              <TextField
                label="Data de nascimento"
                value={birthDate}
                fullWidth
                onChange={(e) => setBirthDate(e.target.value)}
              />
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
              onClick={saveUpdate}
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
