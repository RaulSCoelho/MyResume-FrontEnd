import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Box } from 'components/Box'
import { Sidebar } from 'components/Sidebar'
import AppContext from 'context'
import { Router } from 'Router'

import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <>
      <AppContext>
        <Box>
          <BrowserRouter>
            <Sidebar />
            <Router />
          </BrowserRouter>
        </Box>
      </AppContext>
      <GlobalStyle />
    </>
  )
}

export default App
