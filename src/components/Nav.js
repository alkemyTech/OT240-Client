import React from 'react';
import { NavLink } from 'react-router-dom';

const handleActiveTab = navData =>
	navData.isActive ? 'navlink-active' : 'navlink-unactive';

const navigationItems = [
	{ text: 'HOME', route: '/' },
	{ text: 'ABOUT', route: '/about' },
	{ text: 'CONTACT', route: '/contact' },
	{ text: 'NEWS', route: '/news' },
];

const Nav = () => {
	return (
		<nav className="Nav">
			{navigationItems.map(({ text, route }, i) => (
				<NavLink to={route} className={handleActiveTab}>
					{text}
				</NavLink>
			))}
		</nav>
	);
};

export default Nav;
