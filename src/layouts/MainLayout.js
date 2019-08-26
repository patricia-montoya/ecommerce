import React from 'react'
import styled from 'styled-components'
import { setRem, setIcon, setColor } from '../styles'
import Logo from '../assets/Logo.jpg'

import GlobalStyles from './GlobalStyles'
import NavigationBar from './NavigationBar'

const MainLayout = (props) => {
  return (
    <Layout>
      <img src={Logo} className="img-logo" alt="Logo"/>
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

.add-icon {
  color: ${setColor.mustard};
  position: absolute;
  right: 0;
  top: ${setRem(410)}
}

.img-logo {
  padding: 0 0 ${setRem(60)} ${setRem(40)};
}


`

export default MainLayout