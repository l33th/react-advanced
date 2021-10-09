import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {
	const initialValue = null;
	const refContainer = useRef(initialValue);
	const divContainer = useRef(initialValue);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(refContainer.current.value);
		console.log(divContainer.current);
	};

	useEffect(() => {
		console.log(refContainer.current);
		refContainer.current.focus();
	});

	return (
		<>
			<h2>use ref basics</h2>
			<form className='form' onSubmit={handleSubmit}>
				<div>
					<input type='text' ref={refContainer} />
					<button className='btn' type='submit'>
						submit
					</button>
				</div>
			</form>
			<div ref={divContainer}>Hello World</div>
		</>
	);
};

export default UseRefBasics;
