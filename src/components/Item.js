import React from 'react'
import { ItemBox } from './Styled/Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setIcon } from '../styles'

class Item extends React.Component {
  state = {
    itemChecked: false
  }

  onCheckedItem = () => {
    this.setState({
      itemChecked: !this.state.itemChecked
    })
  }


  render() {
    return (
      <ItemBox>
        <div className="item-check">
          { this.state.itemChecked || this.props.checked ?  <FontAwesomeIcon icon={setIcon.check} size="3x" onClick={this.onCheckedItem}/> 
          : <FontAwesomeIcon icon={setIcon.unCheck} size="3x" onClick={this.onCheckedItem}/> } 
        </div>
        <div className="item-content">
          <div className="item-date">
            <span>{this.props.date}</span>
          </div>
          <div className="item-vertical-line"></div>
          <div className="item-destination">
            <FontAwesomeIcon icon={setIcon.plane} size="lg" className="item-destination-plane-icon"/>
            <div className="item-destination-info">
              <span>{this.props.origin}</span>
              <FontAwesomeIcon icon={setIcon.arrowDown} size="3x" className="item-destination-arrow-icon"/>
              <span>{this.props.destination}</span>
            </div>
          </div>
          <div className="item-vertical-line"></div>
          <div className="item-pricing">
            <FontAwesomeIcon icon={setIcon.truck} size="4x" flip="horizontal" className="item-pricing-truck-icon"/>
            <span className="item-price">{`$ ${this.props.amount}.00`}</span>
            <span className="item-quantity">{this.props.quantity}</span>
          </div>
          <FontAwesomeIcon icon={setIcon.options} size="lg" className="item-options-icon"/>
        </div>
      </ItemBox>
    )
  }
}


export default Item