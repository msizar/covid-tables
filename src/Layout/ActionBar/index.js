import React from 'react';

import styles from './styles';

const ActionBar = ({ children }) => {
  const classes = styles();
  return <div className={classes.countriesActions}>{children}</div>;
};

export default ActionBar;
