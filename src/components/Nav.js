import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<NavLink to="/">HOME</NavLink>
			<NavLink to="/about">ABOUT</NavLink>
			<NavLink to="/contact">CONTACT</NavLink>
		</nav>
	);
};

export default Nav;
