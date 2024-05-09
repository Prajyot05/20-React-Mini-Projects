import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import "./styles.css"

function StarRating({numOfStars = 5}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)
    }

    function handleMouseLeave(){
        setHover(rating)
    }
  return (
    <div className='star-rating'>
        {
            [...Array(numOfStars)].map((_, index) => {
                index += 1
                return (
                    <FaStar 
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'} // "<=" is for 'less than equal to'
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={60}
                    />
                )
            })
        }
    </div>
  )
}

export default StarRating