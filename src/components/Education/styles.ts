import { FlexStyle } from 'components/Flex/styles'
import styled from 'styled-components'

export const CollegeStyle = styled(FlexStyle)`
  padding: 10px;
  margin: 10px 0;
  border-top: 2px solid ${props => props.theme.colors.background};
  border-bottom: 2px solid ${props => props.theme.colors.background};

  p {
    text-align: center;
  }
`
