import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomProvider from './context/OrgContext.jsx';
import Public from './pages/Public/Public';
import Backoffice from './pages/Backoffice/Backoffice';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyProfileComponent from './pages/MyProfile/MyProfile';

function App() {
  return (
    <CustomProvider>
      <Router>
        <Routes>
          <Route path='/*' element={<Public />} />
          <Route element={<PrivateRoute />}>
            <Route path='/backoffice/*' element={<Backoffice />} />
          </Route>
          <Route path='/miperfil/*' element={<MyProfileComponent />} />
        </Routes>
      </Router>
    </CustomProvider>
  );
}

export default App;
