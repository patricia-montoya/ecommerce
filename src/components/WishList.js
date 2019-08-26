import React from 'react'
import styled from 'styled-components'
import MainLayout from '../layouts/MainLayout'
import { EmptyBox } from './Styled/EmptyPage'
import { setIcon } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WishList = () => {
  return (
    <MainLayout>
      <EmptyBox>
        <FontAwesomeIcon icon={setIcon.wishlist} className="empty-page-icon" size="3x"/>
        <span>Welcome to your WishList Page</span>
      </EmptyBox>
    </MainLayout>
  )
}

export default WishList