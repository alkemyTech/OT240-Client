import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Public from './pages/Public/Public';
import Backoffice from './pages/Backoffice/Backoffice';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyProfileComponent from './pages/MyProfile/MyProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Public />} />
        <Route element={<PrivateRoute allowedRoles={[1]} />}>
          <Route path='/backoffice/*' element={<Backoffice />} />
        </Route>
        <Route element={<PrivateRoute allowedRoles={[1, 2]} />}>
          <Route path='/miperfil/*' element={<MyProfileComponent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
