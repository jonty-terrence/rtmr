import React, {useState} from 'react'
import ReactMapGL from 'react-map-gl'

function Map () {
    const [viewport, setViewport] = useState({
        latitude: -36.848461,
        longitude: 174.763336,
        width: "100vw",
        height: "100vh",
        zoom: 10
    })
  return (
    <div className="map-box">
      <ReactMapGL 
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1Ijoiam9udHl0ZXJyZW5jZSIsImEiOiJja2R6ZG55NzMxYm00MnFvYTQzeGkzZDZ4In0.lI5DIs4hAE1MSBURbIwnFA">
          </ReactMapGL> 
    </div>
  )
}

export default Map