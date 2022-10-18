import React, { memo } from 'react'

import { StyleProps, TextStyle } from './styles'

interface Props extends StyleProps {
  id?: string
  class?: string
  text: string
  style?: object
}

const TextComponent: React.FC<Props> = props => {
  return (
    <TextStyle
      id={props.id}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      className={props.class}
      style={props.style}
    >
      {props.text}
    </TextStyle>
  )
}

export const Text = memo(TextComponent)
