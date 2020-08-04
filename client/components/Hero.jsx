import React from 'react'

function Hero () {
  return (
    <div className="hero">
      <header>
        <div class="overlay"></div>
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="hero-video.mp4" type="video/mp4"/>
          </video>
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <h3 class="display-3">Support businesses that pay their people a living wage</h3>
              <p class="lead mb-0">Discover your new local here</p>
              <span class="fas fa-angle-double-down bounce-7"></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Hero
