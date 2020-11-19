import React, {useState} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'

import businesses from '../data/auckland-businesses'

function Map () {
    const [viewport, setViewport] = useState({
        latitude: -36.848461,
        longitude: 174.763336,
        width: "75vw",
        height: "100vh",
        zoom: 10
    })
  return (
    <div className="map-box">
        <ReactMapGL 
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1Ijoiam9udHl0ZXJyZW5jZSIsImEiOiJja2R6ZG55NzMxYm00MnFvYTQzeGkzZDZ4In0.lI5DIs4hAE1MSBURbIwnFA"
            onViewportChange={(viewport) => {
                setViewport(viewport)
            }}
            mapStyle="mapbox://styles/jontyterrence/ckdzey51n0dqx1arr2pnnhvx9"
            >
            {businesses.map(business => {
                if (business.lat) {
                    return (
                        <Marker 
                            latitude={Number(business.lat)} longitude={Number(business.long)} offsetLeft={-20} offsetTop={-10} key={business.streetNum}>
                            <i className="fas fa-map-marker"></i>
                        </Marker>
                    )
                }
            })
            }
        </ReactMapGL> 
    </div>
  )
}

export default Map