import { FlexStyle } from 'components/Flex/styles'
import styled from 'styled-components'

export const SocialMediaStyle = styled(FlexStyle)`
  padding: 10px;

  a {
    text-decoration: none;
    color: black;
    width: 100%;
    margin: 10px;
  }

  #socialMediaBg {
    background-color: ${props => props.theme.colors.background};
    box-shadow: 4px 6px 5px -2px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
  }
`
