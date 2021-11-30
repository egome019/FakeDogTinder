import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./style.css";

function Hero(props) {
	return (
		<section>
			<Row>
				<Col className="hero_position">
					<Image src={props.backGround} fluid />
					<h1 className="hero_text_position hero_text_location">
						Fake Dog Tinder
					</h1>
					<h2 className="hero_text_position hero_text_location_two">
						Where any dog can get a bone!
					</h2>
				</Col>
			</Row>
		</section>
	);
}

export default Hero;
