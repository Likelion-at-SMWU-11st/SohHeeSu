import React from 'react';

const Hello = ({name, color}) => {
    return (
        <div style={{color}}>
            Welcome, {name}!
        </div>
    );
};

export default Hello;