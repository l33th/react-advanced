import React from "react";

const ErrorExample = () => {
	let title = "Error React";

  const handleClick = () => {
    title = 'Hello, ErrorsReact.'
    console.log(title);
  }

	return (
		<>
			<h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
		</>
	);
};

export default ErrorExample;
