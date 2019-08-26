import React from 'react'
import styled from 'styled-components'
import { setIcon, setColor, setRem } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchInput from './Search'
import ToggleButtons from './ToggleButtons'


const Filters = () => {
  return (
    <FiltersContainer>
      <FontAwesomeIcon icon={setIcon.lightbulb} className="filter-smart-icon"/>
      <span>Smart Filters</span>
      <div className="filter-horizontal-line"></div>
      <ToggleButtons />
      <div className="filter-horizontal-line"></div> 
      <span className="filter-state-span">Status</span>     
      <SearchInput width="70%"/>
      <div className="filter-state">DELIVERED</div>
    </FiltersContainer>
  )
}

const FiltersContainer = styled.aside`
  border-right: 1px solid ${setColor.mediumGray};
  width: ${setRem(250)};
  position: relative;
  left: 0;
  font-size: ${setRem(18)};

  .filter-smart-icon {
    padding-right: ${setRem(10)};
    margin-left: ${setRem(10)};
  }

  .filter-horizontal-line {
    margin: ${setRem(20)} 0 ${setRem(20)} ${setRem(20)};
    border-bottom: 1px solid ${setColor.mediumGray};
    width: 70%;
  }

  .filter-state-span {
    display: block;
    margin:  0 0 5% 30% ;
  }

  .filter-state {
    color: ${setColor.black};
    padding: ${setRem(15)};
    background: ${setColor.white};
    width: 70%;
    font-weight: bold;
    margin-top: ${setRem(15)};
    text-align: center;
    box-shadow: 1px 1px 1px 0px ${setColor.mediumGray};
  }

`

export default Filters