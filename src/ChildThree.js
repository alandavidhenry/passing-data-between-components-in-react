// SEND DATA TO PARENT

import React from 'react'

export default function ChildThree({childThreeToParent}) {
    const dataThree = "This is data sent from the ChildThree component via the Parent component";

    return (
        <div>
            <h1>ChildThree</h1>
            <button onClick={() => childThreeToParent(dataThree)}>Send data to Child Four via Parent</button>
        </div>
    )
}