import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setColor, setRem, setIcon } from '../styles'
import SaleImg from '../assets/Sale.JPG' 

const ToggleButtons = () => {
  return (
    <ToggleBtns>
      <div className="toogle-sales">
        <img src={SaleImg} className="sales-img"/>
        <FontAwesomeIcon icon={setIcon.toggle} size="3x" className="toggle-btn special" flip="horizontal"/>        
      </div>
      <div className="toogle-likes">
        <FontAwesomeIcon icon={setIcon.likes} size="3x"/>
        <FontAwesomeIcon icon={setIcon.toggle} size="3x" className="toggle-btn" flip="horizontal"/>        
      </div>
      <div className="toogle-sales">
        <FontAwesomeIcon icon={setIcon.calendar} size="3x"/>
        <FontAwesomeIcon icon={setIcon.toggle} size="3x" className="toggle-btn special" flip="horizontal"/>        
      </div>
    </ToggleBtns>
  )
}

const ToggleBtns = styled.div`
  color: ${setColor.darkGray};

  .toggle-btn {
    color: ${setColor.mainBlue};
    margin-left: ${setRem(100)};
  }

  .special {
    margin-left: ${setRem(105.5)};
  }

  .sales-img {
    height: 48px;
    width: 48px;
  }

`

export default ToggleButtons
