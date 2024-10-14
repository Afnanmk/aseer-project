import React from 'react'
import MapHeader from '../components/MapHeader'
import MapContainer2 from '../components/MapContainer2'

const Map = () => {
  return (
    <section className='h-screen w-full overflow-hidden font-display'>
      <MapHeader/>
      <MapContainer2/>
    </section>
  )
}

export default Map