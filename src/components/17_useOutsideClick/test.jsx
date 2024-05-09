import React, { useRef, useState } from 'react'
import useOutsideClick from '.';

function UseOnClickOutsideTest() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    useOutsideClick(ref, () => setShowContent(false))

  return <div ref={ref}>
    {
        showContent ? <div>
            <h1>This is a random content</h1>
            <p>Click outside of this to close this. It won't close by clicking inside the content.</p>
        </div> : <button onClick={() => setShowContent(true)}>Show Content</button>
    }
    </div>
}

export default UseOnClickOutsideTest