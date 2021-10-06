import React, { useState } from "react";

const ShowHide = () => {
	const [show, setShow] = useState(false);
    
    const Item = () => {
        return (
            <div style={{ marginTop: "2rem" }}>
                <h1>window</h1>
                <h2>size: </h2>
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
