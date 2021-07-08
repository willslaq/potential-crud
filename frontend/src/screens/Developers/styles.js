import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  logo: {
    width: 500,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  container: {
    paddingBottom: 20,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
}));
