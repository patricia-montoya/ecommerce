import { faHome, faEnvelope, faStar, faCog, faUser, faTruck, faHeart, faCalendarAlt, 
         faCheckCircle, faPaperPlane, faPlusCircle, faLightbulb, faSearch, faChevronDown, faEllipsisV, faToggleOn } from '@fortawesome/free-solid-svg-icons'

export const setColor = {
  black: '#000000',
  red: '#e74b4b',
  white: '#ffffff',
  mustard: '#ff922b',
  mainBlue: '#002533',
  lighGray: '#eeeeee',
  mainGray: '#e6e6e6',
  mediumGray: '#bfbfbf',
  darkGray: '#666666'
}

export const setFont = {
  main: `font-family: 'Roboto', sans-serif;`
}

export const setRem = (number = 16) => {
  return `${number/16}rem`
}

export const setIcon = {
  home: faHome,
  messages: faEnvelope,
  wishlist: faStar,
  settings: faCog,
  myAccount: faUser,
  truck: faTruck,
  likes: faHeart,
  calendar: faCalendarAlt,
  check: faCheckCircle,
  plane: faPaperPlane,
  plus: faPlusCircle,
  lightbulb: faLightbulb,
  search: faSearch,
  arrowDown: faChevronDown,
  options: faEllipsisV,
  toggle: faToggleOn
}