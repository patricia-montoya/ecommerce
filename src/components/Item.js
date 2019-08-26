import React from 'react'
import { ItemBox } from './ItemStyled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setColor, setIcon, setRem } from '../styles'

const Item = (props) => {
  return (
    <ItemBox>
      <div className="item-check">
        <FontAwesomeIcon icon={setIcon.check} size="3x"/>
      </div>
      <div className="item-content">
        <div className="item-date">
          <span>Monday 10th</span>
          <span>2:28 PM</span>
        </div>
        <div className="item-vertical-line"></div>
        <div className="item-destination">
          <FontAwesomeIcon icon={setIcon.plane} size="lg" className="item-destination-plane-icon"/>
          <div className="item-destination-info">
            <span>Houston, TX, 33619</span>
            <FontAwesomeIcon icon={setIcon.arrowDown} size="3x" className="item-destination-arrow-icon"/>
            <span>Atlanta, GA, 30123</span>
          </div>
        </div>
        <div className="item-vertical-line"></div>
        <div className="item-pricing">
          <FontAwesomeIcon icon={setIcon.truck} size="4x" flip="horizontal" className="item-pricing-truck-icon"/>
          <span className="item-price">$250.00</span>
          <span className="item-quantity">1</span>
        </div>
        <FontAwesomeIcon icon={setIcon.options} size="lg" className="item-options-icon"/>
      </div>
    </ItemBox>
  )
}


export default Item