import React, { createContext, useState, useEffect } from 'react'

import { FETCH } from 'api/fetch'
import { Tokens } from 'interfaces/auth'
import jwtDecode from 'jwt-decode'

interface AuthContextType {
  authUser: any
  authTokens: any
  Login: (username: string, password: string) => void
  Logout: () => void
  RefreshToken: (token: string) => void
}

export const AuthContext = createContext<AuthContextType>(null)

interface Props {
  children?: React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const token = localStorage.getItem('authTokens')
    ? JSON.parse(localStorage.getItem('authTokens'))
    : null
  const [authTokens, setAuthTokens] = useState(token)
  const [user, setUser] = useState(token ? jwtDecode(token.access) : null)
  const [loading, setLoading] = useState(true)
  const baseURL = 'https://raulresume.herokuapp.com'

  const Login = async (username, password) => {
    await FETCH.post<Tokens>({
      url: `${baseURL}/api/token/`,
      payload: {
        username,
        password,
      },
    })
      .then(res => {
        setAuthTokens(res)
        setUser(jwtDecode(res.access))
        localStorage.setItem('authTokens', JSON.stringify(res))
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const Logout = () => {
    setUser(null)
    setAuthTokens(null)
    localStorage.removeItem('authTokens')
  }

  const RefreshToken = async () => {
    await FETCH.post<Tokens>({
      url: `${baseURL}/api/token/refresh/`,
      payload: {
        refresh: authTokens?.refresh,
      },
    })
      .then(res => {
        setAuthTokens(res)
        setUser(jwtDecode(res.access))
        localStorage.setItem('authTokens', JSON.stringify(res))
      })
      .catch(() => {
        Logout()
      })
  }

  const contextData = {
    authUser: user,
    authTokens,
    Login,
    Logout,
    RefreshToken,
  }

  useEffect(() => {
    if (loading) {
      RefreshToken()
      setLoading(false)
    }
    const minutes = 1000 * 60 * 4
    const interval = setInterval(() => {
      if (authTokens) {
        RefreshToken()
      }
    }, minutes)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authTokens, loading])

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}
