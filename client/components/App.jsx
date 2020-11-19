import React from 'react'

import Nav from './Nav'
import Hero from './Hero'
import MapContainer from'./MapContainer'

class App extends React.Component {
  render () {
    return (
      <div className="body">
        <Nav />
        <Hero />
        <MapContainer />
      </div>
    )
  }
}

export default App
