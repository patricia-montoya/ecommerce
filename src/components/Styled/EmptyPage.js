import styled from 'styled-components'
import { setColor, setRem } from '../../styles'

export const EmptyBox = styled.div`
  text-align: center;
  padding: ${setRem(50)};

  .empty-page-icon {
    padding-right: 5%;
    color: ${setColor.mustard}
  }

  span {
    font-size: ${setRem(28)};
    vertical-align: initial;
    font-weight: bold;
  }

`