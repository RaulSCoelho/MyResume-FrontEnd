import React from 'react'

import { Flex } from 'components/Flex'
import { Text } from 'components/Text'

import { SkillStyle } from './styles'

interface Props {
  skill: string
}

export const Skill: React.FC<Props> = props => {
  return (
    <SkillStyle width="33.33%">
      <Flex id="skillBg">
        <Text text={props.skill} style={{ padding: '5px' }} />
      </Flex>
    </SkillStyle>
  )
}
