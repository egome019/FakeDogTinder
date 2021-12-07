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
		if (event.target.getAttribute("value") === "Yes") {
			let newbies = this.state.newFriend;
			const count = Math.random() * 5;
			const match = () => {
				if (count > 3) {
					this.setState({ newFriend: newbies++ });
				}
			};
			match();
			// const newState = { ...this.state };

			// console.log(newState);

			// this.setState(newState);

			console.log(this.state);

			this.getNewDog();
		} else {
			// const newState = { ...this.state };

			// this.setState(newState);

			// console.log(this.state);

			this.getNewDog();
		}

		// const newState = { ...this.state };

		// this.setState(newState);

		// this.getNewDog();

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
						<TinderButton
							variant="success"
							use="Yes"
							handleClick={this.handleClick}
						>
							Yes
						</TinderButton>
					</section>
				</Col>
			</Row>
		);
	}
}

export default Discover;
