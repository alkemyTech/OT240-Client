import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';

function App() {
	return (
		<main className="App">
			<Router>
				<Nav></Nav>
				<Routes>
					<Route path="/" element={<h1>HOME</h1>}></Route>
					<Route path="/about" element={<h1>ABOUT</h1>}></Route>
					<Route path="/contact" element={<h1>CONTACT</h1>}></Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;
