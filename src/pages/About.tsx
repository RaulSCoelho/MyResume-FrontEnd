import React, { useContext } from 'react'

import { Flex } from 'components/Flex'
import { ResumeStyle, ResumeWrap } from 'components/Resume'
import { ProfileBase } from 'components/Resume/profileBase'
import { SocialMedia } from 'components/SocialMedias/SocialMedia'
import { Text } from 'components/Text'
import { TranslationContext } from 'context/TranslationContext'

export const About: React.FC = () => {
  const { content } = useContext(TranslationContext)

  return (
    <ResumeWrap>
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
            <br />
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
                (qualification, i) => (
                  <li key={i}>
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
            <Flex id="socialMedias">
              {content.about.contact.socialMedias.map((socialMedia, i) => (
                <SocialMedia
                  name={socialMedia.Name}
                  link={socialMedia.Link}
                  key={i}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </ResumeStyle>
    </ResumeWrap>
  )
}
