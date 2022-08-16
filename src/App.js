import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Public from './pages/Public/Public';
import Backoffice from './pages/Backoffice/Backoffice';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { fetchUser } from './redux/actions/auth.action';
import MyProfileComponent from './pages/MyProfile/MyProfile';
import PrivateRoute from './routing/PrivateRoute';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUser({ url: '/auth/me' }));
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Public />} />
        <Route element={<PrivateRoute />}>
          <Route path='/backoffice/*' element={<Backoffice />} />
        </Route>
        <Route path='/miperfil/*' element={<MyProfileComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
