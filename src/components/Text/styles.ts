import styled from 'styled-components'

export interface StyleProps {
  fontSize?: number
  fontWeight?: 'normal' | 'bold'
}

export const TextStyle = styled.p<StyleProps>`
  color: ${props => props.theme.colors.text};
  font-size: ${props => `${props.fontSize}px`};
  font-weight: ${props => props.fontWeight};
  white-space: pre-line;
`
