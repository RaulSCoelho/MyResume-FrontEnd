import React, { useContext } from 'react'

import { College } from 'components/Education/College'
import { Company } from 'components/Experience/Company'
import { Flex } from 'components/Flex'
import { ResumeStyle } from 'components/Resume'
import { ProfileBase } from 'components/Resume/profileBase'
import { Text } from 'components/Text'
import { TranslationContext } from 'context/TranslationContext'

export const Experience: React.FC = () => {
  const { content } = useContext(TranslationContext)

  return (
    <Flex>
      <ResumeStyle>
        <ProfileBase />
        <Flex className="content main" style={{ justifyContent: 'start' }}>
          <Flex className="content subContent">
            <Text
              text={content.experience.title}
              fontSize={25}
              fontWeight="bold"
            />
            <Flex id="experiences">
              {content.experience.experiences.map((exp, i) => (
                <Company
                  company={exp.Company}
                  location={exp.Location}
                  occupation={exp.Occupation}
                  period={exp.Period}
                  description={exp.Description}
                  key={i}
                />
              ))}
            </Flex>
          </Flex>
          <Flex className="content subContent">
            <Text
              text={content.education.title}
              fontSize={25}
              fontWeight="bold"
            />
            <Flex id="educations">
              {content.education.educations.map(edu => (
                <College
                  college={edu.College}
                  course={edu.Course}
                  shift={edu.Shift}
                  period={edu.Period}
                  description={edu.Description}
                  key={edu.id}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </ResumeStyle>
    </Flex>
  )
}
