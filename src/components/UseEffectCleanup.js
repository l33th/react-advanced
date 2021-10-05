import React, { useState } from "react";

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);
	console.log(size);

	return (
		<div>
			<h1>use effect cleanup</h1>
		</div>
	);
};

export default UseEffectCleanup;
