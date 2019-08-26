import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { EmptyBox } from './Styled/EmptyPage'
import { setIcon } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Settings = () => {
	return (
		<MainLayout>
			<EmptyBox>
				<FontAwesomeIcon icon={setIcon.settings} className="empty-page-icon" size="3x"/>
				<span>Welcome to Settings Page</span>
			</EmptyBox>
		</MainLayout>
	)
}

export default Settings