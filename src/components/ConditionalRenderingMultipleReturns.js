import React, { useState } from "react";
const url = "https://api.github.com/users";

const ConditionalRenderingMultipleReturns = () => {
	const [loading, setLoading] = useState(false);

	if (loading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div>
			<h1>Conditional Rendering</h1>
			<h2>Multiple Returns</h2>
		</div>
	);
};

export default ConditionalRenderingMultipleReturns;
