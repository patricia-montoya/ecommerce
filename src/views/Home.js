import React from 'react'
import MainLayout from '../layouts/MainLayout'
import SearchInput from '../components/Search' 
import ItemList from '../components/ItemList'
import Filters from '../components/Filters'

const Home = (props) => {
  return (
    <>
      <MainLayout>
          <SearchInput position="absolute" top="0" right="0" width="30%"/>
          <ItemList className="items-container"/>
      </MainLayout>
      <Filters />
    </>
  )
}

export default Home