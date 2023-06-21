import React from "react";
import { Nav, NavLink, NavMenu } from "./navbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
        <NavLink to="/react-personal-site/">
			Home
		</NavLink>
		<NavLink to="/react-personal-site/about" >
			About
		</NavLink>
		<NavLink to="/react-personal-site/projects">
			Projects
		</NavLink>
		<NavLink to="/react-personal-site/resume">
			Resume
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
