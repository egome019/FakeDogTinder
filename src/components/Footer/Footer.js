import React from "react";
import { Navbar } from "react-bootstrap";
import "./style.css";

function Footer() {
	return (
		<footer>
			<Navbar
				className="footer_txt"
				bg="light"
				expand="lg"
				variant="light"
				fixed="sticky"
			>
				<Navbar.Text>© Egome019</Navbar.Text>
			</Navbar>
		</footer>
	);
}

export default Footer;
