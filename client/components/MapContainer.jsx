import React from 'react'

import Map from './Map'
import Listings from './Listings'

function MapContainer () {
  return (
    <div className="map-container">
      <Map />
      <Listings />
    </div>
  )
}

export default MapContainer
