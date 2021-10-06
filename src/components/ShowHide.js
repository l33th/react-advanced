import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";

const ShowHide = () => {
	const [show, setShow] = useState(false);

	const Item = () => {
		const [size, setSize] = useState(window.innerWidth);

		const checkSize = () => {
			setSize(window.innerWidth);
		};

		const cleanUp = () => {
			window.removeEventListener("resize", checkSize);
		};

		useEffect(() => {
			window.addEventListener("resize", checkSize);
			return cleanUp;
		}, []);
		return (
			<div style={{ marginTop: "2rem" }}>
				<h1>window</h1>
				<h2>size: {size} PX</h2>
			</div>
		);
	};

	return (
		<div>
			<h1>ShowHide</h1>
			<button className='btn' onClick={() => setShow(!show)}>
				show/hide
			</button>
			{show && <Item />}
		</div>
	);
};

export default ShowHide;
