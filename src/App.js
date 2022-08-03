import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Public from './pages/Public/Public';
import Backoffice from './pages/Backoffice/Backoffice';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Public />} />
        <Route path='/backoffice' element={<Backoffice />} />
      </Routes>
    </Router>
  );
}

export default App;
