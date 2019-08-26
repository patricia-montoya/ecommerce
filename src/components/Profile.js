import React from 'react'
import styled from 'styled-components'
import MainLayout from '../layouts/MainLayout'
import { EmptyBox } from './Styled/EmptyPage'
import { setIcon } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Profile = () => {
  return (
    <MainLayout>
      <EmptyBox>
        <FontAwesomeIcon icon={setIcon.myAccount} className="empty-page-icon" size="3x"/>
        <span>Welcome to your Account Page</span>
      </EmptyBox>
    </MainLayout>
  )
}

export default Profile