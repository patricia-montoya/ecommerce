import { createGlobalStyle } from 'styled-components'
import { setColor, setFont, setRem } from '../styles'

const Globals = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
  }

  body {
    margin: ${setRem(20)};
    height: 100vh;
    background: ${setColor.mainGray};
    ${setFont.main}
  }

`

export default Globals