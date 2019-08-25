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
        <div className="item-date">
          <span>Monday 10th</span>
          <span>2:28 PM</span>
        </div>
        <div className="item-line"></div>
        <div>
          <FontAwesomeIcon icon={setIcon.plane} size="xs" className="item-icon-plane"/>
          <div>
            <span>Houston, TX, 33619</span>
            <FontAwesomeIcon icon={setIcon.arrowDown} size="lg" className="item-icon-arrow"/>
            <span>Atlanta, GA, 30123</span>
          </div>
        </div>
        <div className="item-line"></div>
        <FontAwesomeIcon icon={setIcon.truck} size="3x" flip="horizontal"/>
        <div className="item-price">$250.00</div>
        <div className="item-quantity">
          <span>1</span>
        </div>
        <FontAwesomeIcon icon={setIcon.options} size="lg"/>
      </div>
    </ItemBox>
  )
}

const ItemBox = styled.div`
  font-size: ${setRem(14)};
  display: flex;
  padding: ${setRem()} 0  ${setRem()} 0;

  div {
    display: inline-block;
    padding: 0 20px 0 20px;
  }
  .item-check {
    padding: ${setRem(20)};
    color: ${setColor.mustard}
  }

  .item-content {
    display: flex;
    vertical-align: top;
    width: 110%;
    height: ${setRem(90)};
    border: 1px solid ${setColor.white};
    border-radius: 30px;
    background: ${setColor.white};
    color: ${setColor.darkGray}; 

    .item-date {
      font-size: ${setRem(18)};

      span {
        display: block;
        text-align: center;
        margin-top: 8%;
      }
    }

    .item-line {
      margin-top: 10px;
      border-left: 0.2px solid ${setColor.lighGray};
      height: 70%;
    }

    .item-icon-plane {
      vertical-align: center;
    }

    .item-icon-arrow {
      color: ${setColor.mustard};
      display: block;
      margin: 0 auto;
    }

    .item-price {
      font-size: ${setRem(36)};
      font-weight: bold;
    }

    .item-quantity {
      font-size: ${setRem(10)};
      border: 1px solid ${setColor.red};
      border-radius: 4px;
      background: ${setColor.red};
      color: ${setColor.white};
      height: 25px;
      width: 25px;
      padding: 5px;
      text-align: center;
      vertical-align: bottom;

      span {
        margin-top: 5%;
      }
    }
  }

  

`

export default Item