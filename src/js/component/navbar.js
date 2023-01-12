import React from "react";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex">
			<Link to="/">
				<Image fluid flex width="10%" className="thumbnail fluid float-left" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_wars_1977_us.svg/1200px-Star_wars_1977_us.svg.png"/>
			</Link>
			<div className="ml-auto float-right">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
