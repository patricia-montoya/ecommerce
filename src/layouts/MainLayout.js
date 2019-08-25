import React from 'react'
import styled from 'styled-components'
import { setRem, setIcon, setColor } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      <FontAwesomeIcon icon={setIcon.plus} className="add-icon" size="5x"/>     
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
  right: ${setRem(60)};
  top: ${setRem(560)}

}


`

export default MainLayout