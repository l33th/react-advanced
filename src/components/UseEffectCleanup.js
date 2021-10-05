import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);

	const checkSize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", checkSize);
	});
	return (
		<>
			<h1>window size</h1>
			<h2>{size} PX</h2>
		</>
	);
};

export default UseEffectCleanup;
