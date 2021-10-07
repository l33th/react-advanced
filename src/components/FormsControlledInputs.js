import React from "react";

const FormsControlledInputs = () => {
	const handleSubmit = (e) => {
		console.log("hello world");
	};
	return (
		<>
			<article>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='firstName'>Name : </label>
						<input type='text' id='firstName' name='firstName' />
					</div>

					<div className='form-control'>
						<label htmlFor='email'>Email : </label>
						<input type='text' id='email' name='email' />
					</div>
					<button type='submit'>add person</button>
				</form>
			</article>
		</>
	);
};

export default FormsControlledInputs;
