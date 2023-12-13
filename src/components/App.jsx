import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Contacts from './contacts/Contacts';
import { PublicRoute } from './public/PublicRoute';
import Login from 'pages/Login';
import { SignUp } from 'pages/SignUp';
import { Navigation } from './navigation/Navigation';
import { PrivateRoute } from './private/PrivateRoute';
import { refreshUserThunk } from '../redux/user/userThunk';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
