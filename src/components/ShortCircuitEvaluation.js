import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuitEvaluation = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <div>
      <h1>ShortCircuitEvaluation</h1>
      <h2>short circuit</h2>
      {/* <h1>{firstValue}</h1>
			<h2>value: {secondValue}</h2> */}
      <h1>{text || 'developer'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error.</h2>
        </div>
      )}
    </div>
  );
};

export default ShortCircuitEvaluation;
