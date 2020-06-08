import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './styles';

const Buttons = ({ children, handleOnClick, variant, link }) => {
  const classes = styles();

  switch (variant) {
    case 'outlined':
      return (
        <Button
          className={classes.secondaryButton}
          fullWidth
          variant="outlined"
          onClick={handleOnClick}
        >
          {children}
        </Button>
      );

    case 'link':
      return (
        <Link
          className={classes.linkButton}
          variant="caption"
          to={link}
        >
          {children}
        </Link>
      );

    case 'text':
      return (
        <Button
          className={classes.textButton}
          variant="text"
          onClick={handleOnClick}
        >
          {children}
        </Button>
      );

    case 'contained':
      return (
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleOnClick}
        >
          {children}
        </Button>
      );

    default:
      return (
        <Button variant={variant} onClick={handleOnClick}>
          {children}
        </Button>
      );
  }
};

export default Buttons;
