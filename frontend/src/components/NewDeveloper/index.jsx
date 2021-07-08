import {
  FormControlLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Grid,
  IconButton,
  TextField,
} from '@material-ui/core';

import AddRoundedIcon from '@material-ui/icons/AddRounded';
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
  const { developers, setDevelopers } = useContext(DevelopersContext);
  const classes = useStyles();

  const handleClickOpen = async () => {
    setOpen(true);
    setName('');
    setHobby('');
    setBirthDate('');
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
    const response = await api.post('/developers', data);
    setDevelopers([...developers, response.data]);
    console.log('response', response);
    setOpen(false);
    return response;
  }

  return (
    <>
      <IconButton onClick={handleClickOpen} className={classes.addButton}>
        <AddRoundedIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { borderRadius: 26 } }}
      >
        <DialogTitle>Desenvolvedor</DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Nome"
                value={name}
                fullWidth
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gênero</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel
                    value="M"
                    control={<Radio />}
                    label="Masculino"
                  />
                  <FormControlLabel
                    value="F"
                    control={<Radio />}
                    label="Feminino"
                  />
                  <FormControlLabel
                    value="N"
                    control={<Radio />}
                    label="Não binarie/Outro"
                  />
                </RadioGroup>
              </FormControl>
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
                type="date"
                defaultvalue="DD/MM/AAAA"
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
