import styled from 'styled-components'

export interface StyleProps {
  width?: string
  height?: string
}

export const FlexStyle = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  justify-content: space-around;
  align-items: center;
`
