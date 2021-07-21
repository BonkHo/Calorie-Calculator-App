import React from "react";
import {
	HeaderContainer,
	AboutLink,
	HeaderLogo,
	SignInLink,
} from "./HeaderElements";

const Header = () => {
	return (
		<HeaderContainer>
			<AboutLink to='/'>About</AboutLink>
			<HeaderLogo to='/'>Calor.io</HeaderLogo>
			<SignInLink to='/'>Sign In</SignInLink>
		</HeaderContainer>
	);
};

export default Header;
