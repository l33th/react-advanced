import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  const Item = () => {
    const [size, setSize] = useState(window.innerWidth);

    // Checksize Function
    const checkSize = () => {
      setSize(window.innerWidth);
    };

    // Use Effect
    useEffect(() => {
      window.addEventListener('resize', checkSize);
      return () => window.removeEventListener('resize', checkSize);
    }, []);

    return (
      <div style={{ marginTop: '2rem' }}>
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
