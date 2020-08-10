import React from 'react'

import Nav from './Nav'
import Hero from './Hero'

class App extends React.Component {
  render () {
    return (
      <div className="body">
        <Nav />
        <Hero />
      </div>
    )
  }
}

export default App
