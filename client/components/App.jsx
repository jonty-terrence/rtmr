import React from 'react'
import request from 'superagent'

import Nav from './Nav'
import Hero from './Hero'
import Listing from './Listing'
import Map from './Map'
import CategorySelector from './Category-Selector'
import InfoBoxes from './InfoBoxes'
import Footer from './Footer'

class App extends React.Component {
  render () {
    return (
    <>
      <Nav />
      <Hero />
      <Listing />
      <Map />
      <CategorySelector />
      <InfoBoxes />
      <Footer />
    </>
    )
  }
}

export default App
