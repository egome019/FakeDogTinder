import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";

class Search extends Component {
	render() {
		return (
			<Row className="container_flex">
				<Col xs={6}>
					<section className="spacing header_center">
						<h1>Search by Breed!</h1>
					</section>
				</Col>
			</Row>
		);
	}
}

export default Search;
