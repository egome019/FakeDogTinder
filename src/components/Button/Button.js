import React from "react";
import { Button } from "react-bootstrap";

function TinderButton(props) {
	return (
		<Button
			variant={props.variant}
			type="button"
			value={props.use}
			onClick={props.handleClick}
		>
			{props.children}
		</Button>
	);
}

export default TinderButton;
