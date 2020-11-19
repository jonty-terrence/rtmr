import React from 'react'

import businesses from '../data/auckland-businesses'

function Listings () {
  return (
    <div className="listing-container">
      {businesses.map(business => {
        return (
          <div key={business.name} className="business-listing">
            <div className="business-name">
              <h4>{business.name}</h4>
            </div>
            <div className="business-info">
            <a href={business.url}>Website</a>
            <a href={business.email}>Email</a>
              </div>
            <div className="business-image">
              <a href={business.url}><img src={business.imageUrl}></img></a>
            </div>
          </div>
        )
      })}
    </div>
  )
}



export default Listings
