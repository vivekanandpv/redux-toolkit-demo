import React, { Fragment } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { languageSlice } from './store/language-slice';
import { loginSlice } from './store/login-slice';
import { themeSlice } from './store/theme-slice';
import { getUserById } from './store/users-sice';

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

  const getUser = () => {
    dispatch(getUserById(5));
  };

  return (
    <Fragment>
      <div className='container p-5'>
        <h3>App Component</h3>
        <hr />
        <button
          onClick={changeLanguage}
          className='btn btn-primary btn-sm mx-2'
        >
          Change Language
        </button>{' '}
        <button onClick={toggleTheme} className='btn btn-warning btn-sm mx-2'>
          Change Theme
        </button>{' '}
        <button onClick={login} className='btn btn-success btn-sm mx-2'>
          Login
        </button>{' '}
        <button onClick={logout} className='btn btn-danger btn-sm mx-2'>
          Logout
        </button>
        <button onClick={getUser} className='btn btn-secondary btn-sm mx-2'>
          Get User
        </button>
        <hr />
        <Navbar />
        <Content />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
