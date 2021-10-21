import React, { useState } from "react";
import { data } from "../data";

const PropDrilling = () => {
	const [people, setPeople] = useState(data);
	return (
		<section>
			<h3>Prop Drilling</h3>
		</section>
	);
};

export default PropDrilling;
