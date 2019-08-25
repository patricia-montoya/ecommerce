import React from 'react'
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
        <div>Date</div>
        <div class="item-line"></div>
        <div>
          <FontAwesomeIcon icon={setIcon.plane} size="xs"/>
          <span>From</span>
          <FontAwesomeIcon icon={setIcon.arrowDown} size="lg"/>
          <span>To</span>
        </div>
        <div class="item-line"></div>
        <FontAwesomeIcon icon={setIcon.truck} size="3x" flip="horizontal"/>
        <div className="item-price">Price</div>
        <div className="item-quantity">1</div>
        <FontAwesomeIcon icon={setIcon.options} size="lg"/>
      </div>
    </ItemBox>
  )
}

const ItemBox = styled.div`
  font-size: ${setRem(20)};

    div {
      display: inline-block;
      padding: 0 20px 0 20px;
    }
    .item-check {
      padding: ${setRem(20)};
      color: ${setColor.mustard}
    }

    .item-content {
      vertical-align: top;
      width: 89%;
      height: ${setRem(90)};
      border: 1px solid ${setColor.white};
      border-radius: 30px;
      background: ${setColor.white};
      color: ${setColor.darkGray}; 
    }
    .item-line {
      margin-top: 10px;
      border-left: 0.2px solid ${setColor.lighGray};
      height: 70%;
    }

    .item-price {
      font-size: ${setRem(32)}
    }

    .item-quantity {
      vertical-align: center;
      font-size: ${setRem(10)};
      border: 1px solid ${setColor.red};
      border-radius: 4px;
      background: ${setColor.red};
      color: ${setColor.white};
      height: ${setRem(25)};
      width: ${setRem(15)};
    }

`

export default Item