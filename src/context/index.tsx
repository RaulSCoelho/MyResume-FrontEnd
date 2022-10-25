import React from 'react'

import { AuthProvider } from './AuthContext'
import { ThemesProvider } from './ThemeContext'
import { TranslationProvider } from './TranslationContext'
import { UserProvider } from './UserContext'

interface Props {
  children?: React.ReactNode
}

const AppContext: React.FC<Props> = ({ children }) => {
  return (
    <ThemesProvider>
      <UserProvider>
        <AuthProvider>
          <TranslationProvider>{children}</TranslationProvider>
        </AuthProvider>
      </UserProvider>
    </ThemesProvider>
  )
}

export default AppContext
