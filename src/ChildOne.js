// PARENT TO CHILD

import React from 'react'

export default function ChildOne({parentToChild}) {
    return (
        <div>
            <h1>ChildOne</h1>
            {/* Display data from Parent component */}
            <div>{parentToChild}</div> 
        </div>
    )
}