import React from 'react'

import { FlexStyle, StyleProps } from './styles'

interface Props extends StyleProps {
  id?: string
  className?: string
  children?: React.ReactNode
  style?: object
  onClick?: () => void
}

export const Flex: React.FC<Props> = props => {
  return (
    <FlexStyle
      id={props.id}
      className={props.className}
      style={props.style}
      {...props}
    >
      {props.children}
    </FlexStyle>
  )
}
