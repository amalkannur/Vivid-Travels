import React from 'react'
import "../Home.scss"

function Review() {
  return (
    <div className='Review py-4 text-md'>
      <h5> Customer Reviews  </h5>
      <div className="container"> 
         <div className="row"> 
            <div className="col-md-6"> 
                <h1>THE PEOPLE WHO KNOW THE BEST </h1>
                <p> 
                There's no easy way to say it: unless you are traveling with one of our specialists, you simply won't get the depth of experience -
                the wisest guides, the closest wilderness encounters, the real people and events that spell the difference between a regular
                package tour and a sublime, once-in-a-lifetime vacation. But don't take our word for it. Listen to our travelers.
                </p>
            </div>
            <div className="col-md-6"> 
                <h1> Carousel </h1>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Review
