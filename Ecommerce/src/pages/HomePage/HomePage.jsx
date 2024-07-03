import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Popular from '../../components/Popular/Popular'
import Offers from '../../components/Offers.jsx/Offers'
import NewCollections from '../../components/NewCollections/NewCollections'
import NewsLetter from '../../components/NewsLetter/NewsLetter'

const HomePage = () => {
  return (
    <div className=''>
      <Banner/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default HomePage
