import React from 'react';

const Hello = () => {
    const name = "heesoo";
    return (
        <>
        {
         name === "heesoo" 
         ? <div>희수가 맞다.</div>
         : <div>희수가 아니다.</div>
        }
        </>
    );
};

export default Hello;