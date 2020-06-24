import React from 'react'

const Iss = props => {
  return (
    <>
      <p>Latitude: {props.lat}</p>
      <p>Longitude {props.long}</p>
      <p>Timestamp: {props.time}</p>
      <p>Visibility: {props.vis}</p>

    </>
  )
}

export default Iss
