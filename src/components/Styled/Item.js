import styled from 'styled-components'
import { setColor, setRem } from '../../styles'

export const ItemBox = styled.div`
  font-size: ${setRem(14)};
  display: flex;
  padding: ${setRem()} 0  ${setRem()} 0;

  div {
    display: inline-block;
    padding: 0 ${setRem(20)} 0 ${setRem(20)};
  }

  .item-check {
    padding: ${setRem(40)} ${setRem(20)} ${setRem(20)} ${setRem(20)};
    color: ${setColor.mustard};
    cursor: pointer;
  }

  .item-content {
    display: flex;
    width: 110%;
    height: ${setRem(120)};
    border: 1px solid ${setColor.white};
    border-radius: 45px;
    background: ${setColor.white};
    color: ${setColor.mediumDarkGray}; 

    .item-date {
      font-size: ${setRem(18)};
      margin-top: ${setRem(50)};

      span {
        display: block;
        text-align: center;
      }
    }

    .item-vertical-line {
      margin-top: ${setRem(10)};
      border-left: 0.2px solid ${setColor.mediumGray};
      height: 70%;
    }
    
    .item-destination {
      margin-top: ${setRem(15)};
      font-size: ${setRem()}
    }

    .item-destination-plane-icon {
      position: relative;
      top: ${setRem(-30)};
      vertical-align: middle;
    }

    .item-destination-arrow-icon {
      color: ${setColor.mustard};
      display: block;
      margin: 0 auto;
    }

    .item-pricing {
      margin: 0 auto;
    }

    .item-pricing-truck-icon {
      position: relative;
      left: ${setRem(-120)};
      top: ${setRem(40)};
    }

    .item-price {
      font-size: ${setRem(36)};
      position: relative;
      left: ${setRem(-80)};
      top: ${setRem(30)};
    }

    .item-quantity {
      position: relative;
      top: ${setRem(20)};
      font-size: ${setRem(12)};
      border: 1px solid ${setColor.red};
      border-radius: 8px;
      background: ${setColor.red};
      color: ${setColor.white};
      padding: 20px;
    }

    .item-options-icon {
      position: relative;
      left: ${setRem(-30)};
      top: ${setRem(50)}; 
    }
  }
`