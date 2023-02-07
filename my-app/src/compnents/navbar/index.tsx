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
		<NavLink to="/react-personal-site/resume">
			Resume
		</NavLink>
		{/* <NavLink to="/blogs" activeStyle>
			Blogs
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Sign Up
		</NavLink>  */}
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
