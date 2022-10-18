import React from 'react'

import { Flex } from 'components/Flex'
import { Text } from 'components/Text'

import { SocialMediaStyle } from './styles'

interface Props {
  link: string
  name: string
}

export const SocialMedia: React.FC<Props> = props => {
  return (
    <SocialMediaStyle width="33.33%">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <Flex id="socialMediaBg">
          <Text text={props.name} style={{ padding: '5px' }} />
        </Flex>
      </a>
    </SocialMediaStyle>
  )
}
