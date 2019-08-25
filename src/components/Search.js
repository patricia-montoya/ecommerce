import React from 'react'
import styled from 'styled-components'
import { setColor, setRem } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = (props) => {
    return (
    <SearchInput name="Search" placeholder="Search" {...props}/>
    )
}

const SearchInput = styled.input`
    width: 20%; 
    border: 1px solid ${setColor.darkGray};
    border-radius: 4px;
    padding: ${setRem()};
    text-align: center;
    font-size: ${setRem(14)}
    position: ${props => props.position};
    top: ${props => setRem(props.top)};
    right: ${props => setRem(props.right)};
`

export default Search