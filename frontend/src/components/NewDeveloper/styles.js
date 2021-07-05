import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  addButton: {
    backgroundColor: 'var(--primary)',
    color: 'var(--pantone)',
    position: 'fixed',
    width: 80,
    height: 80,
    right: 10,
    bottom: 10,
    alignSelf: 'center',
    zIndex: 500,
    '&:hover': {
      opacity: 0.8,
      backgroundColor: 'var(--primary)',
      transition: 'opacity 0.3s',
    },
  },
}));
