import React from 'react'

import businesses from '../data/auckland-businesses'

function Listings () {
  return (
    <div className="listing-container">
      {businesses.map(business => {
        return (
          <div key={business.name} className="business-listing">
            <h4 className="business-name">{business.name}</h4>
            <a href={business.url}><img className="business-image" src={business.imageUrl}></img></a>
          </div>
        )
      })}
    </div>
  )
}



export default Listings
