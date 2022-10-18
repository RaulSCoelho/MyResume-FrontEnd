import React from 'react'

import { Flex } from 'components/Flex'
import { Text } from 'components/Text'

import { SidebarItemStyle } from './styles'

interface Props {
  text?: string
  icon?: React.ReactNode
  onClick?: () => void
}

export const SidebarItem: React.FC<Props> = props => {
  return (
    <SidebarItemStyle onClick={props.onClick} style={{ cursor: 'pointer' }}>
      <Flex id="sidebarItem">
        {props.icon}
        <Text id="sidebarItemText" text={props.text} />
      </Flex>
    </SidebarItemStyle>
  )
}
