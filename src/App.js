import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomProvider from './context/orgContext.jsx';
import Public from './pages/Public/Public';
import Backoffice from './pages/Backoffice/Backoffice';
<<<<<<< HEAD
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <CustomProvider>
      <Router>
        <Routes>
          <Route path='/*' element={<Public />} />
          <Route element={<PrivateRoute />}>
            <Route path='/backoffice/*' element={<Backoffice />} />
          </Route>
        </Routes>
      </Router>
    </CustomProvider>
=======
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
>>>>>>> e59d4be4413bc1b7aa0e0c49396e543b22ab9b56
  );
}

export default App;
