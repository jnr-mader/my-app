import React from 'react';

const Error = ({hide}) => {
    return (
        <div>
            <p>please enter a valid key</p>
            <span onClick={hide(false)}>close</span>
        </div>
    )
}

export default Error