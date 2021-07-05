import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: 'var(--secondary)',
    color: 'var(--pantone)',
    alignSelf: 'center',
    '&:hover': {
      opacity: 0.6,
      backgroundColor: 'var(--secondary)',
      transition: 'opacity 0.3s',
    },
  },
}));
