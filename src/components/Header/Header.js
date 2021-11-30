import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
	return (
		<header>
			<Navbar bg="light" expand="lg" variant="light">
				<Container>
					<Navbar.Brand>Fake Dog Tinder</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/search">Search</Nav.Link>
							<Nav.Link href="/discover">Discover</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</header>
	);
}

export default Header;
