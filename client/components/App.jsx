import React from 'react'
import request from 'superagent'
import Iss from './Iss'
import Map from './Map'

const issURL = 'https://api.wheretheiss.at/v1/satellites/25544'

class App extends React.Component {
  state ={
    latitude: '',
    longitude: '',
    timestamp: '',
    visibility: ''
  }

  componentDidMount () {
    // Create api.js and move function there
    request.get(issURL)
      .then(res => {
        const { latitude, longitude, timestamp, visibility } = res.body
        this.setState({ latitude, longitude, timestamp, visibility })
      })
  }

  render () {
    const { latitude, longitude, timestamp, visibility } = this.state
    return (

    <>
    <h1>Where is the International Space Station (ISS)</h1>
    <Iss lat={latitude} long={longitude} time={timestamp} vis={visibility}/>
    <Map lat={latitude} long={longitude} />
    </>
    )
  }
}

export default App
