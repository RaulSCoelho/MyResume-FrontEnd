import React from 'react'

import { Flex } from 'components/Flex'
import { Text } from 'components/Text'

import { CompanyStyle } from './styles'

interface Props {
  company: string
  location: string
  occupation: string
  period: string
  description: string
}

export const Company: React.FC<Props> = props => {
  return (
    <CompanyStyle>
      <Flex>
        <Text text={`${props.company} - ${props.location}`} />
        <Text text={`${props.occupation} - ${props.period}`} />
        <Text text={props.description} />
      </Flex>
    </CompanyStyle>
  )
}
