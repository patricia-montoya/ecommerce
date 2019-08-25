import React from 'react'
import styled from 'styled-components'
import { setRem, setIcon } from '../styles'
import MainLayout from '../layouts/MainLayout'
import SearchInput from '../components/Search' 
import ItemList from '../components/ItemList'

const Home = (props) => {
  return (
    <MainLayout>
        <SearchInput position="absolute" top="0" right="0"/>
        <ItemList className="items-container"/>
    </MainLayout>
  )
}

export default Home