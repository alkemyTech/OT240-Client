import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Public from './pages/Public/Public';
import Backoffice from './pages/Backoffice/Backoffice';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyProfileComponent from './pages/MyProfile/MyProfile';
import store from './redux/store';
import CustomProvider from './context/OrganizationContext';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <CustomProvider>
          <Routes>
            <Route path='/*' element={<Public />} />
            <Route element={<PrivateRoute allowedRoles={[1]} />}>
              <Route path='/backoffice/*' element={<Backoffice />} />
            </Route>
            <Route element={<PrivateRoute allowedRoles={[1, 2]} />}>
              <Route path='/miperfil/*' element={<MyProfileComponent />} />
            </Route>
          </Routes>
        </CustomProvider>
      </Provider>
    </Router>
  );
}

export default App;
