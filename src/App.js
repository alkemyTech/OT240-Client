import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Public from './pages/Public/Public';
import Backoffice from './pages/Backoffice/Backoffice';
import MyProfileComponent from './pages/MyProfile/MyProfile';
import PrivateRoute from './routing/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Public />} />
        <Route path='/backoffice/*' element={<PrivateRoute />}>
          <Route path='/backoffice/*' element={<Backoffice />} />
        </Route>
        <Route path='/miperfil/*' element={<MyProfileComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
