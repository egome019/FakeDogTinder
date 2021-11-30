import React from "react";
import { Container } from "react-bootstrap";
import Hero from "./components/Hero/Hero";
import heroImg from "./assets/heroImg.jpg";
import Home from "./pages/Home/Home";

function App() {
	return (
		<main>
			<Container>
				<Hero backGround={heroImg} />
				<Home />
			</Container>
		</main>
	);
}

export default App;
