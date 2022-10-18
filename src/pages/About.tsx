import React, { useContext } from 'react'

import { Flex } from 'components/Flex'
import { ResumeStyle } from 'components/Resume'
import { ProfileBase } from 'components/Resume/profileBase'
import { SocialMedia } from 'components/SocialMedias/SocialMedia'
import { Text } from 'components/Text'
import { TranslationContext } from 'context/TranslationContext'

export const About: React.FC = () => {
  const { content } = useContext(TranslationContext)

  return (
    <Flex>
      <ResumeStyle>
        <ProfileBase />
        <Flex className="content main">
          <Flex className="content subContent">
            <Text
              text={content.about.me.title}
              fontSize={25}
              fontWeight="bold"
            />
            <br />
            <Text text={content.about.me.content} />
          </Flex>
          <Flex className="content subContent">
            <Text
              text={content.about.qualifications.title}
              fontSize={25}
              fontWeight="bold"
            />
            <br />
            <ul style={{ width: '85%', paddingLeft: '30px' }}>
              {content.about.qualifications.qualificationsList.map(
                qualification => (
                  <li key={qualification.id}>
                    <Text text={qualification.Qualification} />
                    <br />
                  </li>
                )
              )}
            </ul>
          </Flex>
          <Flex className="content subContent">
            <Text
              text={content.about.contact.title}
              fontSize={25}
              fontWeight="bold"
            />
            <br />
            <Flex id="socialMedias">
              {content.about.contact.socialMedias.map(socialMedia => (
                <SocialMedia
                  name={socialMedia.Name}
                  link={socialMedia.Link}
                  key={socialMedia.id}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </ResumeStyle>
    </Flex>
  )
}
