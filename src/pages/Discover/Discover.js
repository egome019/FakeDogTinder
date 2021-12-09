import React, { Component } from "react";
import { Row, Col, Figure, Alert } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";
import TinderButton from "../../components/Button/Button";

class Discover extends Component {
	state = {
		newDog: "",
		newFriend: 0,
		dogMatch: false,
	};

	componentDidMount() {
		this.getNewDog();
	}

	handleClick = (event) => {
		if (this.state.dogMatch === true) {
			this.setState({ dogMatch: false });
		}

		if (event.target.getAttribute("value") === "Yes") {
			let newbies = this.state.newFriend;
			const count = Math.random() * 5;
			const match = () => {
				if (count > 3) {
					this.setState({ newFriend: newbies + 1, dogMatch: true });
				}
			};
			match();

			// console.log(this.state);

			this.getNewDog();
		} else {
			this.getNewDog();
		}
		console.log(this.state);
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
		const perfectMatch = this.state.dogMatch;
		return (
			<Row className="image_position">
				<Col xs={6}>
					<Figure className="spacing">
						<Figure.Image
							src={this.state.newDog}
							alt="dog image"
							width={678}
							height={499}
						/>
					</Figure>

					<section className="button_position spacing">
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
					<section className="spacing">
						{perfectMatch === true ? (
							<Alert variant="success">
								<p>Nice! This dog likes the way you smell!</p>
							</Alert>
						) : (
							<br />
						)}
					</section>
				</Col>
			</Row>
		);
	}
}

export default Discover;
