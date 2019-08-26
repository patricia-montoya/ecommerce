import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { EmptyBox } from './Styled/EmptyPage'
import { setIcon } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Messages = () => {
  return (
    <MainLayout>
      <EmptyBox>
        <FontAwesomeIcon icon={setIcon.messages} className="empty-page-icon" size="3x"/>
        <span>Welcome to Messages Page</span>
      </EmptyBox>
    </MainLayout>
  )
}

export default Messages