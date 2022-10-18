import styled from 'styled-components'

export interface StyleProps {
  fontSize?: number
  fontWeight?: 'normal' | 'bold'
}

export const TextStyle = styled.p<StyleProps>`
  color: ${props => props.theme.colors.text};
  font-size: ${props =>
    props.fontSize ? `${props.fontSize}px` : 'min(max(1.5vw, 13pt), 17pt)'};
  font-weight: ${props => props.fontWeight};
  white-space: pre-line;
`
