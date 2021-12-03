import React, { Component } from "react";
import { Row, Col, Figure } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";
import TinderButton from "../../components/Button/Button";

class Discover extends Component {
	state = {
		newDog: "",
		newFriend: 0,
	};

	componentDidMount() {
		this.getNewDog();
	}

	handleClick = (event) => {
		// if button yes is clicked the 1 in 5 will become new friend

		const newState = { ...this.state };

		this.setState(newState);

		this.getNewDog();

		// console.log(this.state);
	};

	getNewDog = () => {
		API.randomDog()
			.then((response) => {
				this.setState({ newDog: response.data.message });
				// console.log(this.state);
			})
			.catch((error) => console.log(error));
	};

	render() {
		return (
			<Row className="image_position">
				<Col xs={6}>
					<Figure>
						<Figure.Image
							src={this.state.newDog}
							alt="dog image"
							width={678}
							height={499}
						/>
					</Figure>

					<section className="button_position">
						<TinderButton
							variant="danger"
							use="No"
							handleClick={this.handleClick}
						>
							No
						</TinderButton>
						<TinderButton variant="success" use="Yes">
							Yes
						</TinderButton>
					</section>
				</Col>
			</Row>
		);
	}
}

export default Discover;
