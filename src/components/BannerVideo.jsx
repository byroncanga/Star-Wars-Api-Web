import React from 'react'
import video from "../img/startw.mp4"

const BannerVideo = () => {
  return (
    <div className="w-full h-[350px] overflow-hidden">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source type="video/mp4" src={video} />
      </video>
    </div>
  )
}

export default BannerVideo