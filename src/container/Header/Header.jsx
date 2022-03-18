import React from 'react';

import { Hero, Navbar } from '../../components';

import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Navbar />
      <Hero />
    </header>
  )
}

export default Header