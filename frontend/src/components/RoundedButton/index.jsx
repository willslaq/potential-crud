import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useStyles } from './styles';

function RoundedButton({
  children,
  variant,
  color,
  startIcon,
  endIcon,
  onClick,
}) {
  const classes = useStyles();

  return (
    <Button
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

RoundedButton.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
};

RoundedButton.defaultProps = {
  variant: 'text',
  color: 'primary',
  onClick: () => {},
  startIcon: null,
  endIcon: null,
};

export default withRouter(RoundedButton);
