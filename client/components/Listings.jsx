import React from 'react'

import Listing from './Listing'
import businesses from '../data/auckland-businesses'

function Listings () {
  return (
    <div className="listing-container">
      {businesses.map(business => {
        return (
          <div>
            <img src={business.imageUrl}></img>
            <h4>{business.name}</h4>
            <p>{business.url}</p>
            
          </div>
        )
      })}
    </div>
  )
}



export default Listings
