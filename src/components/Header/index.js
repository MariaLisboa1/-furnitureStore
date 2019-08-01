import React from 'react';

import { Container, Arrow } from './styles';
import logo from '../../assets/logo/logo.png';

export default function Header() {
	return (
		<>
	<Container>
			<header className="header">
				{/* <img src={logo} alt="Logo" /> */}
				<h1>LOGO</h1>
				<h2>Especialistas em imóveis!</h2>
			</header>
		</Container>

		<Arrow>
			↓
		</Arrow>
		</>

	);
}
