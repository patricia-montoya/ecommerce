import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setColor, setRem, setIcon } from '../styles'
import SaleImg from '../assets/Sale.JPG' 

const ToggleButtons = () => {
  return (
    <ToggleBtns>
      <div className="toogle-content">
        <img src={SaleImg} className="sales-img toggle-icon"/>
        <FontAwesomeIcon icon={setIcon.toggle} size="3x" className="toggle-btn special" flip="horizontal"/>        
      </div>
      <div className="toogle-content toggle-icon">
        <FontAwesomeIcon icon={setIcon.likes} size="3x"/>
        <FontAwesomeIcon icon={setIcon.toggle} size="3x" className="toggle-btn" flip="horizontal"/>        
      </div>
      <div className="toogle-content toggle-icon">
        <FontAwesomeIcon icon={setIcon.calendar} size="3x"/>
        <FontAwesomeIcon icon={setIcon.toggle} size="3x" className="toggle-btn special" flip="horizontal"/>        
      </div>
    </ToggleBtns>
  )
}

const ToggleBtns = styled.div`
  color: ${setColor.darkGray};

  .toogle-content {
    padding-bottom: ${setRem()};
  }

  .toggle-icon {
    margin-left: ${setRem(20)};
  }

  .toggle-btn {
    color: ${setColor.mainBlue};
    margin-left: ${setRem(80)};
  }

  .special {
    margin-left: ${setRem(85.5)};
  }

  .sales-img {
    height: ${setRem(48)};
    width: ${setRem(48)};
  }

`

export default ToggleButtons
