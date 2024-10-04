import React from 'react'
import MapHeader from '../components/MapHeader'
import MapContainer from '../components/MapContainer'

const Map = () => {
  return (
    <section className='h-screen w-full overflow-hidden font-display'>
      <MapHeader/>
      <MapContainer/>
    </section>
  )
}

export default Map