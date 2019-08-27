import React from 'react'
import styled from 'styled-components'
import { setRem, setColor } from '../styles'
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
  position: fixed;
  right: ${setRem(20)};
  bottom: ${setRem(20)};
  cursor: pointer;
}

.img-logo {
  padding: 0 0 ${setRem(60)} ${setRem(40)};
}

.general-check-icon {
  color: ${setColor.mustard};
  margin-left: ${setRem(35)};
  cursor: pointer;
}

`

export default MainLayout