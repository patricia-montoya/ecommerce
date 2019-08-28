import React from 'react'
import styled from 'styled-components'
import { setRem, setIcon } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Item from './Item'
import axios from '../axios-items'

class ItemList extends React.Component {
  state = {
    checked: false
  }

  toggleCheck = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    const { items } = this.props
    return (
      <>
        { this.state.checked ? <FontAwesomeIcon icon={setIcon.check} size="3x" className="general-check-icon" onClick={this.toggleCheck}/>
        : <FontAwesomeIcon icon={setIcon.unCheck} size="3x" className="general-check-icon" onClick={this.toggleCheck}/>}
        <ItemsContainer>
          { items ? items.map((item) =>  <Item key={item.id} checked={this.state.checked} {...item}/>) : null }
        </ItemsContainer>
        <FontAwesomeIcon icon={setIcon.plus} className="add-icon" size="5x"/>
      </>
    )
  }
}

const ItemsContainer = styled.div`
  width: 98.5%;
  position: absolute;
  top: ${setRem(76)};
  right: 0;

`

export default ItemList