import React, { useRef } from "react";

const UseRefBasics = () => {
	const initialValue = null;
	const refContainer = useRef(initialValue);

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	console.log(refContainer);

	return (
		<div>
			<h2>use ref basics</h2>
			<form className='form' onSubmit={handleSubmit}>
				<div>
					<input type='text' ref={refContainer} />
					<button className='btn' type='button'>
						submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default UseRefBasics;
