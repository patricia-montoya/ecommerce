import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import { setRem } from '../styles'

const ItemList = () => {
    return (
        <ItemsContainer>
            <Item />
        </ItemsContainer>
    )
}

const ItemsContainer = styled.div`
    width: 98.5%;
    position: absolute;
    top: ${setRem(76)};
    right: 0;

`

export default ItemList