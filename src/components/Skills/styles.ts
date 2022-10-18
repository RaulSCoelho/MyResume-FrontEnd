import { FlexStyle } from 'components/Flex/styles'
import styled from 'styled-components'

export const SkillStyle = styled(FlexStyle)`
  height: auto;
  padding: 10px;

  #skillBg {
    background-color: ${props => props.theme.colors.background};
    box-shadow: 4px 6px 5px -2px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
  }

  @media (max-width: 500px) {
    width: 50%;
    height: auto;
  }
`
