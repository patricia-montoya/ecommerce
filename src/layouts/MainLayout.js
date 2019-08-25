import React from 'react'
import styled from 'styled-components'
import { setRem } from '../styles'
import GlobalStyles from './GlobalStyles'
import NavigationBar from './NavigationBar'

const MainLayout = (props) => {
  return (
    <Layout>
      <GlobalStyles />
      <NavigationBar />
      <main className="main-content">
        { props.children }
      </main>      
    </Layout>
  )
}

const Layout = styled.div`
.main-content {
  position: absolute;
  top: ${setRem(150)};
  right: ${setRem(96)};
  width: 72%;
  height: 80%;
}


`

export default MainLayout