import React from 'react';
import { NavLink } from 'react-router-dom';

const handleActiveTab = navData =>
	navData.isActive ? 'navlink-active' : 'navlink-unactive';

const Nav = () => {
	return (
		<nav className="Nav">
			<NavLink to="/" className={handleActiveTab}>
				HOME
			</NavLink>
			<NavLink to="/about" className={handleActiveTab}>
				ABOUT
			</NavLink>
			<NavLink to="/contact" className={handleActiveTab}>
				CONTACT
			</NavLink>
			<NavLink to="/news" className={handleActiveTab}>
				NEWS
			</NavLink>
		</nav>
	);
};

export default Nav;
