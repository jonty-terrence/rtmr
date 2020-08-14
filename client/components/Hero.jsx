import React from 'react'

function Hero () {
  return (
    <div className="hero">
      <header>
        <div className="overlay"></div>
          <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
            <source src="hero-video.mp4" type="video/mp4"/>
          </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h3 className="display-3">Support businesses that pay their people a living wage</h3>
              <p className="lead mb-0">Discover your new local here</p>
              <span className="fas fa-angle-double-down bounce-7"></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Hero
