import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Cards from "../../components/Card Group/Cards";
import API from "../../utils/API";
import "./style.css";

class Search extends Component {
	state = {
		newBreed: "",
		breedList: {},
		randomCandidate: {},
	};

	componentDidMount() {
		API.breedList()
			.then((response) => {
				// console.log(response.data.message);
				this.setState({ breedList: response.data.message });
			})
			.catch((error) => console.log(error));
	}

	handleChange = (e) => {
		this.setState({ newBreed: e.target.value });
	};

	getNewBreed = (breed) => {
		// API. based on the breed you select then you map for the cards
		// let doggies = this.state.newBreed;
		API.search(breed)
			.then((res) => {
				// console.log(res.data);

				this.setState({ randomCandidate: res.data.message });
			})
			.catch((error) => console.log(error));
	};

	render() {
		let list = this.state;
		return (
			<Row className="container_flex">
				<Col xs={6}>
					<section className="spacing header_center ">
						<h1>Search by Breed!</h1>
					</section>
					<section>
						<Form.Label>Breed Name:</Form.Label>
						<Form.Select
							aria-label="Breed Select"
							placeholder="Select Dog Breed"
							onChange={this.handleChange}
						>
							<option>Select Dog Breed</option>
							{Object.keys(list.breedList).map((breed, i) => {
								// console.log(list);
								return <option key={i}>{breed}</option>;
							})}
						</Form.Select>
					</section>
					<section>
						{/* I need to place the response from the search call somewhere...perhaps local storage....need to think... */}
						{this.getNewBreed(list.newBreed)}
						{console.log(list.randomCandidate[0])}
						{Object.keys(list.randomCandidate).map((rando, i) => {
							let imgSrc;
							for (let index = 0; index < 10; index++) {
								imgSrc = rando[index];
							}
							return <Cards key={i} headShot={imgSrc} />;
						})}
					</section>
				</Col>
			</Row>
		);
	}
}

export default Search;
