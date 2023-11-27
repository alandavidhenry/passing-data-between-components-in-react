import React, { useState } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import ChildThree from './ChildThree';
import ChildFour from './ChildFour';

export default function Parent() {

// PARENT TO CHILD
    // State for parent to child
    const [dataOne, setDataOne] = useState('');

    // Set dataOne to data to send to the Child component
    const parentToChild = () => {
        setDataOne("This is data from the Parent component to the Child component.");
    }


// CHILD TO PARENT
    // State for child to parent
    const [dataTwo, setDataTwo] = useState('');

    // Set dataTwo to data received from the Child component
    const childToParent = (childData) => {
        setDataTwo(childData);
    }

// CHILD 3 TO CHILD 4 VIA PARENT
    const [dataThree, setDataThree] = useState('');

    const childThreeToParent = (childThreeData) => {
        setDataThree(childThreeData)
    }



// HTML
  return (
    <div>

        {/* PARENT TO CHILD */}
        <ChildOne parentToChild={dataOne} />
        <div>
            <button onClick={() => parentToChild()}>Child One (parent to child)</button>
        </div>


        {/* CHILD TO PARENT */}
        <ChildTwo childToParent={childToParent} />
        {/* Display received data */}
        <div>{ dataTwo }</div>


        {/* CHILD TO CHILD VIA PARENT */}
        <ChildThree childThreeToParent={childThreeToParent} />
        <ChildFour dataThree={dataThree}/>

    </div>
  )
}