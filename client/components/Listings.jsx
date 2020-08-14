import React from 'react'

import Listing from './Listing'
import businesses from '../data/auckland-businesses'

function Listings () {
  return (
    <div className="listing-container">
      <Listing businesses={businesses}/>
    </div>
  )
}



export default Listings
