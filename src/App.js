import React, { Fragment } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { languageSlice } from './store/language-slice';
import { loginSlice } from './store/login-slice';
import { themeSlice } from './store/theme-slice';

function App() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const changeLanguage = () => {
    if (language.toLowerCase() === 'english') {
      dispatch(languageSlice.actions.setLanguage('Kannada'));
    } else {
      dispatch(languageSlice.actions.setLanguage('English'));
    }
  };

  const login = () => {
    dispatch(loginSlice.actions.login());
  };

  const logout = () => {
    dispatch(loginSlice.actions.logout());
  };

  const toggleTheme = () => {
    dispatch(themeSlice.actions.toggle());
  };

  return (
    <Fragment>
      <h3>App Component</h3>
      <hr />
      <button onClick={changeLanguage}>Change Language</button> <br />
      <button onClick={toggleTheme}>Change Theme</button> <br />
      <button onClick={login}>Login</button> <br />
      <button onClick={logout}>Logout</button>
      <hr />
      <Navbar />
      <Content />
      <Footer />
    </Fragment>
  );
}

export default App;
