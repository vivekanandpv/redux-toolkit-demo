import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Navbar = (props) => {
  const login = useSelector((state) => state.login);
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);

  return (
    <Fragment>
      <h3>Navbar Component</h3>
      <hr />
      <p>Current Theme: {theme}</p>
      <p>Current Login: {login ? 'Login' : 'Logout'}</p>
      <p>Current Language: {language}</p>
    </Fragment>
  );
};

export default Navbar;
