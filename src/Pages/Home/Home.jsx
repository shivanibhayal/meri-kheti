import React from 'react'
import Slider from '../../components/Slider'
import Trending from '../../components/Trending'
import Latest from './Latest'

const Home = () => {
  return (
    <>
      <Slider/>
      <Trending/>
      <Latest/>
    </>
  )
}

export default Home
