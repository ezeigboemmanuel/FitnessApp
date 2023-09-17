import React from 'react'
import bannerImage from "../assets/image/fitnessimg.jpg"
import Image from 'next/image'
const Banner = () => {
  return (
    <div className="banner">
        <Image src={bannerImage} alt="banner-img" fill className="banner-img" />
        <div>
            <p  className="banner-text">GET A HEALTHY BODY WITH THE PERFECT EXERCISES</p>
        </div>
        <div className="banner-search">
            <input type="text" className="banner-input" placeholder='Search Exercises...' />
            <button className="banner-btn">Search</button>
        </div>
    </div>
  )
}

export default Banner