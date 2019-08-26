import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setColor, setRem, setIcon } from '../styles'

const NavigationBar = () => {
  return (
    <NavBar>
      <ul className="nav-list">
        <NavLink to="/" exact>
          <li className="nav-list-item">
              <FontAwesomeIcon icon={setIcon.home} size="lg"/>
              <label className="nav-item-label">Home</label>
          </li>
        </NavLink>
        <NavLink to="/messages">
          <li className="nav-list-item">
              <FontAwesomeIcon icon={setIcon.messages} size="lg"/>
              <label className="nav-item-label">Messages</label>
          </li>
        </NavLink>
        <NavLink to="/wishlist">
          <li className="nav-list-item">
            <FontAwesomeIcon icon={setIcon.wishlist} size="lg" />
            <label className="nav-item-label">Wishlist</label>
          </li>
        </NavLink>
        <NavLink to="/settings">
          <li className="nav-list-item">
              <FontAwesomeIcon icon={setIcon.settings} size="lg"/>
              <label className="nav-item-label">Settings</label>          
          </li>
        </NavLink>
        <NavLink to="/profile">
          <li className="nav-list-item">
            <FontAwesomeIcon icon={setIcon.myAccount} size="lg"/>
            <label className="nav-item-label">My Account</label>
          </li>
        </NavLink>
      </ul>
    </NavBar>
  )
}

const NavBar = styled.nav`
    position: absolute;
    width: 70vw;
    top: ${setRem(60)};
    right: ${setRem(96)};
    height: ${setRem(60)};
    background: ${setColor.white};
    color: ${setColor.black};
    
    .nav-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background: ${setColor.white};
    }

    .nav-list-item {
    margin-top: ${setRem(10)};
    }
    .nav-item-label {
      display: block;
      padding: ${setRem(5)};
      font-size: ${setRem(11)};
      text-align: center;
      font-weight: bold;
    }

    svg {
      margin: 0 44%;
    }

    a {
      display: flex;
      justify-content: center;
      width: 20%;
      display: inline-block;
      text-decoration: none;
      height: 100%;
      color: ${setColor.black};
      &:active, &.active {
        background: ${setColor.mainBlue};
        color: ${setColor.white};
      }
    }

`

export default NavigationBar