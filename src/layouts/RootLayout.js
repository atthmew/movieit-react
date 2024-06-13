import { Outlet, NavLink } from 'react-router-dom';

function RootLayout(props) {
	return (
		<div className="mainContainer">
			<nav>
				<p className="brandName">Mov(i)eIt</p>
				<div className="links">
					<NavLink to={'/'}>Home</NavLink>
					<NavLink to={'watch-list'}>Watch List</NavLink>
				</div>
			</nav>
			<div className="main">
				<Outlet />
			</div>
		</div>
	);
}

export default RootLayout;
