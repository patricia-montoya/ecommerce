import React from 'react'
import styled from 'styled-components'
import { setRem, setIcon } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Item from './Item'
import axios from '../axios-items'

class ItemList extends React.Component {
  state = {
    checked: false,
    items: []
  }

  toggleCheck = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  addItem = () => {
    const item = {
      date: 'Monday 10th 2:28 PM',
      origin: 'Houston, TX, 33619',
      destination: 'Atlanta, GA, 30123',
      amount: 250.00,
      quantity: 1
    }

    axios.post('/items.json', item)
    .then(response => console.log(response))
    .catch(error => console.log(error))

  }

  componentDidMount() {
    axios.get('https://ecommerce-project-d31ae.firebaseio.com/items.json')
    .then(response => {
      const data = Object.values(response.data)
      this.setState({ items: data })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <>
        { this.state.checked ? <FontAwesomeIcon icon={setIcon.check} size="3x" className="general-check-icon" onClick={this.toggleCheck}/>
        : <FontAwesomeIcon icon={setIcon.unCheck} size="3x" className="general-check-icon" onClick={this.toggleCheck}/>}
        <ItemsContainer>
          { console.log(this.state.items)}
          { this.state.items ? this.state.items.map((item) => <Item key={item.id} checked={this.state.checked} {...item}/>) : null }
        </ItemsContainer>
        <FontAwesomeIcon icon={setIcon.plus} className="add-icon" size="5x" onClick={this.addItem}/>
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