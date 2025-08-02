import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
    <section className='gallery-section'>
      <h2 className='gallery-title'>Our Stays in Motion</h2>
      <div className='video-grid'>
        <video autoPlay loop muted playsInline className='gallery-video'>
          <source src='Video/fam.mp4' type='video/mp4' />
        </video>
        <video autoPlay loop muted playsInline className='gallery-video'>
          <source src='Video/cottegevid.mp4' type='video/mp4' />
        </video>
        <video autoPlay loop muted playsInline className='gallery-video'>
          <source src='Video/luxuryvid.mp4' type='video/mp4' />
        </video>
      </div>
    </section>
  )
}

export default Gallery
