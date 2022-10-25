import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ThemeContext } from 'context/ThemeContext'
import { About } from 'pages/About'
import { Experience } from 'pages/Experience'
import { Home } from 'pages/Home'
import { Skills } from 'pages/Skills'

export function Router() {
  const { setIsLoading } = useContext(ThemeContext)

  useEffect(() => {
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  )
}
