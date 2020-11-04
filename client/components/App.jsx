import React from 'react'

import Nav from './Nav'
import Hero from './Hero'
import MapContainer from'./MapContainer'
import InfoBoxes from './InfoBoxes'
import Footer from './Footer'

class App extends React.Component {
  render () {
    return (
      <div className="body">
        <Nav />
        <Hero />
        <MapContainer />
        {/* <InfoBoxes />
        <Footer /> */}
      </div>
    )
  }
}

export default App
