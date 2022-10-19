import React, { useContext } from 'react'

import { Flex } from 'components/Flex'
import { ResumeStyle } from 'components/Resume'
import { ProfileBase } from 'components/Resume/profileBase'
import { Skill } from 'components/Skills/Skill'
import { Text } from 'components/Text'
import { TranslationContext } from 'context/TranslationContext'

export const Skills: React.FC = () => {
  const { content } = useContext(TranslationContext)

  return (
    <Flex>
      <ResumeStyle>
        <ProfileBase />
        <Flex className="content main">
          <Flex className="content subContent">
            <Text text={content.skills.title} fontSize={25} fontWeight="bold" />
            <Flex id="skills">
              {content.skills.skillsList.map((skill, i) => (
                <Skill skill={skill.Skill} key={i} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </ResumeStyle>
    </Flex>
  )
}
