import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  logo: {
    width: 500,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },

  buttonWrapper: {
    width: 400,
    height: 100,
    padding: 20,
  },
}));
