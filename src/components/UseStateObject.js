import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Genthos',
    age: 22,
    message: 'Hello, World',
  });

  const [name, setName] = useState('CyberEleet');
  const [age, setAge] = useState(33);
  const [message, setMessage] = useState('Hello, World!');

  const changeMessage = () => {
    // setPerson({...person, message: 'Hello, World'});
    setMessage('Hack The Planet!');
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
