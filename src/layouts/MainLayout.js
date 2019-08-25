import React from 'react'
import GlobalStyles from './GlobalStyles'

const MainLayout = (props) => {
  return (
    <>
      <GlobalStyles />
      { props.children }      
    
    </>
  )
}

export default MainLayout