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
    <UserProvider>
      <TranslationProvider>
        <AuthProvider>
          <ThemesProvider>{children}</ThemesProvider>
        </AuthProvider>
      </TranslationProvider>
    </UserProvider>
  )
}

export default AppContext
