import React from 'react'
import useWindowResize from '.'

function UseWindowResizeTest() {
    const {width, height} = useWindowResize();
  return (
    <div>
        <h1>UseWindowResizeHook</h1>
        <p>Width is {width}</p>
        <p>Height is {height}</p>
    </div>
  )
}

export default UseWindowResizeTest