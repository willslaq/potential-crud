import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  logo: {
    width: 500,
  },

  buttonWrapper: {
    width: 400,
    height: 100,
    padding: 20,
  },
}));
