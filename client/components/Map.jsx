import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react'

const Map = props => {
  const position = [props.lat, props.long]
  const zoom = 13
  return (
    <>

    <div className="leaflet-container fontchange">
      <h1>ISS Map</h1>
      <LeafletMap center={position} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            ISS right now
          </Popup>
        </Marker>
      </LeafletMap>
    </div>
      </>
  )
}

export default Map
