import React from 'react'

import { Flex } from 'components/Flex'
import { Text } from 'components/Text'

import { CollegeStyle } from './styles'

interface Props {
  college: string
  course: string
  shift: string
  period: string
  description: string
}

export const College: React.FC<Props> = props => {
  return (
    <CollegeStyle>
      <Flex>
        <Text text={props.college} />
        <Text text={props.course} />
        <Text text={`${props.shift} - ${props.period}`} />
        <Text text={props.description} />
      </Flex>
    </CollegeStyle>
  )
}
