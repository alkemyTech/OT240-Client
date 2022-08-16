import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Public from './pages/Public/Public';
import Backoffice from './pages/Backoffice/Backoffice';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { fetchUser } from './redux/actions/auth.action';

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
      </Routes>
    </Router>
  );
}

export default App;
