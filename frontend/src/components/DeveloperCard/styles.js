import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    borderRadius: 60,
    backgroundColor: 'var(--pantone)',
    display: 'flex',
    padding: 10,
    margin: 10,
  },
  cardImage: {
    height: 100,
    borderRadius: '50%',
  },
  buttonWrapper: {
    paddingRight: '50px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  nameWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
