import React from 'react';
import classes from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={classes.loader}>
         <div className={classes["lds-dual-ring"]} data-testid="loader"></div>
    </div>
  )
}

export default Loader;