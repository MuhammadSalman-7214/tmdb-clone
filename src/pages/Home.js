import React from 'react'
import SearchBanner from '../components/SearchBanner'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div className="lg:mx-110px">
      <div className="">
        <SearchBanner/>
        <Trending/>
      </div>
    </div>
  )
}

export default Home
