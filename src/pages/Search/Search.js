import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Cards from "../../components/Card Group/Cards";
import API from "../../utils/API";
import "./style.css";

class Search extends Component {
	state = {
		newBreed: "",
		breedList: [],
	};

	componentDidMount() {
		API.breedList()
			.then((response) => {
				this.setState({ breedList: response.data.message });
			})
			.catch((error) => console.log(error));
	}

	getNewBreed = () => {
		// API. based on the breed you select then you map for the cards
	};

	render() {
		return (
			<Row className="container_flex">
				<Col xs={6}>
					<section className="spacing header_center ">
						<h1>Search by Breed!</h1>
					</section>
					<section>
						<Form.Select aria-label="Breed Select">
							{/* {this.state.breedList.map((breed) => {
								return <option key={breed.id}>{breed}</option>;
							})} */}
						</Form.Select>
					</section>
					<Cards />
				</Col>
			</Row>
		);
	}
}

export default Search;
