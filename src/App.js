import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<div className="page-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/news" element={<News />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
