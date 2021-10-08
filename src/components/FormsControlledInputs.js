import React, { useState } from "react";

const FormsControlledInputs = () => {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("hello world");
	};
	return (
		<>
			<article>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='firstName'>Name : </label>
						<input
							type='text'
							id='firstName'
							name='firstName'
							value={firstName}
							placeholder='John Smith'
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='email'>Email : </label>
						<input
							type='text'
							id='email'
							name='email'
							value={email}
							placeholder='johnsmith@email.com'
						/>
					</div>
					<button type='submit'>add person</button>
				</form>
			</article>
		</>
	);
};

export default FormsControlledInputs;
