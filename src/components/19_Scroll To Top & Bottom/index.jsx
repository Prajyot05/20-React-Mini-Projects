import React, { useRef } from 'react'
import useFetch from '../16_useFetch'

function ScrollToTopAndBottom() {
    const {data, error, pending} = useFetch(
        "https://dummyjson.com/products?limit=100",
        {}
    );

    const bottomRef = useRef(null);

    if(pending) return <h1>Loading...</h1>
    if(error) return <h1>Error Occured.</h1>

    function handleScrollToTop(){
        window.scrollTo({
            top: 6700, 
            left: 0, 
            behavior: 'smooth'
        })
    }

    function handleScrollToBottom(){
        bottomRef.current.scrollIntoView({behavior: 'smooth'});
    }

  return (
    <div>
        <h1>Scroll To Top And Bottom</h1>
        <h3>This is the top section</h3>
        <button onClick={handleScrollToBottom}>Scroll to bottom</button>
        <ul>
            {
                data && data.products && data.products.length ? 
                data.products.map(item => <li>{item.title}</li>) : null
            }
        </ul>
        <button onClick={handleScrollToTop}>Scroll to top</button>
        <h3 ref={bottomRef}>This is the bottom section.</h3>
    </div>
  )
}

export default ScrollToTopAndBottom