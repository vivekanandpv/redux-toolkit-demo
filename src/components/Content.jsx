import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Content = (props) => {
  const login = useSelector((state) => state.login);
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);
  const user = useSelector((state) => state.user);
  return (
    <Fragment>
      <h3>Content Component</h3>
      <hr />
      <p>Current Theme: {theme}</p>
      <p>Current Login: {login ? 'Login' : 'Logout'}</p>
      <p>Current Language: {language}</p>
      <hr />
      <p>Current User:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Fragment>
  );
};

export default Content;
