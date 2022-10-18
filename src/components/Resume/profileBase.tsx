import React, { useContext } from 'react'

import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { TranslationContext } from 'context/TranslationContext'
import { UserContext } from 'context/UserContext'
import { CalculateAge, toPhoneNumberString } from 'utils/Functions'

import { ProfileBaseStyle } from './styles'

export const ProfileBase: React.FC = () => {
  const { language } = useContext(TranslationContext)
  const { user } = useContext(UserContext)

  const userInfo = user.user.find(u => u.Lang === language)
  const fullName = `${userInfo.FirstName} ${userInfo.LastName}`
  const region = `${user.address[0].City} - ${user.address[0].State}`
  const phoneNumber = toPhoneNumberString(userInfo.PhoneNumber)
  const others = `${CalculateAge(userInfo.BirthDate)} ${
    language === 'en' ? 'years old' : 'anos'
  } - ${userInfo.Citizenship} - ${userInfo.MaritalStatus}`

  return (
    <ProfileBaseStyle>
      <Flex id="profilePic">
        <img src="me.jpg" alt="profile" />
      </Flex>
      <Flex id="profileBaseContent">
        <Text text={fullName} fontWeight="bold" />
        <Text text={region} />
        <Text text={phoneNumber} />
        <Text text={userInfo.Email} />
        <Text text={others} />
      </Flex>
    </ProfileBaseStyle>
  )
}
