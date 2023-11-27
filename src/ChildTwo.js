// CHILD TO PARENT

import React from 'react'

export default function ChildTwo({ childToParent }) {

    const dataTwo = "This is data from the Child Component to the Parent Component."

    return (
        <div>
            <h1>ChildTwo</h1>
            {/* On button click, send data to the Parent component */}
            <button onClick={() => childToParent(dataTwo)}>Child Two (child to parent)</button>
        </div>
     )
}