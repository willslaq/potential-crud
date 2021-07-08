import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
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
    paddingRight: 50,
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 10,
    },
  },
  cardTitleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: '1rem',
  },
}));
