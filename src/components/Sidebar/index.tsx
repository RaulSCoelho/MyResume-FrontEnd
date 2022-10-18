import React, { useContext } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineCode } from 'react-icons/hi'
import { TbLicense } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

import { Flex } from 'components/Flex'
import { Switch } from 'components/Switch'
import { ThemeContext } from 'context/ThemeContext'
import { TranslationContext } from 'context/TranslationContext'

import { SidebarItem } from './sidebarItem'
import { SidebarStyle } from './styles'

export const Sidebar: React.FC = () => {
  const { theme, onToggleTheme } = useContext(ThemeContext)
  const { language, onToggleLanguage, content } = useContext(TranslationContext)
  const navigate = useNavigate()

  return (
    <SidebarStyle>
      <Flex id="sidebar-buttons">
        <Flex id="sidebar-buttons-page">
          <SidebarItem
            text={content.sideBar.about}
            icon={<AiOutlineUser size={'30px'} color={theme.colors.text} />}
            onClick={() => navigate('about', { replace: true })}
          />
          <SidebarItem
            text={content.sideBar.skills}
            icon={<HiOutlineCode size={'30px'} color={theme.colors.text} />}
            onClick={() => navigate('skills', { replace: true })}
          />
          <SidebarItem
            text={content.sideBar.experience}
            icon={<TbLicense size={'30px'} color={theme.colors.text} />}
            onClick={() => navigate('experience', { replace: true })}
          />
        </Flex>
        <Flex id="sidebar-buttons-toggle">
          <SidebarItem
            text={language === 'en' ? 'English' : 'Português'}
            icon={
              <img
                src={language === 'en' ? 'usa.png' : 'brazil.png'}
                alt="lang"
                style={{ height: '30px' }}
              />
            }
            onClick={onToggleLanguage}
          />
          <Switch
            switchWhen={theme.title !== 'light'}
            onClick={onToggleTheme}
            width={40}
            height={20}
            handleDiameter={16}
            offColor="#4566"
          />
        </Flex>
      </Flex>
    </SidebarStyle>
  )
}
