import React from 'react'

import Listing from './Listing'
import businesses from '../data/auckland-businesses'

function Listings () {
  return (
    <div className="listing-container">
      <h2 className="listing-container-title">Auckland Businesses</h2>
      {businesses.map(business => {
        return (
          <div key={business.name} className="business-listing">
            <a href={business.url}><img className="business-image" src={business.imageUrl}></img></a>
            <h4 className="business-name">{business.name}</h4>
          </div>
        )
      })}
    </div>
  )
}



export default Listings
