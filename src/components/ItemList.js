import React from 'react'
import styled from 'styled-components'
import { setRem, setIcon } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Item from './Item'
import {  } from '../styles'

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
    return (
      <>
        { this.state.checked ? <FontAwesomeIcon icon={setIcon.check} size="3x" className="general-check-icon" onClick={this.toggleCheck}/>
        : <FontAwesomeIcon icon={setIcon.unCheck} size="3x" className="general-check-icon" onClick={this.toggleCheck}/>}
        <ItemsContainer>
          <Item checked={this.state.checked} />
          <Item checked={this.state.checked} />
          <Item checked={this.state.checked} />
        </ItemsContainer>
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