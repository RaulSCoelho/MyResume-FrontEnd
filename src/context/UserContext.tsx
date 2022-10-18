import React, { createContext, useEffect, useState } from 'react'

import { FETCH } from 'api/fetch'
import { UserResponse } from 'interfaces/user'

interface UserContextType {
  user: UserResponse
  Post: (endpoint: string, payload: any, token: string) => void
  Put: (endpoint: string, payload: any, token: string) => void
  Delete: (endpoint: any, token: string) => void
}

export const UserContext = createContext<UserContextType>(null)

interface Props {
  children?: React.ReactNode
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserResponse>(null)
  const baseURL = 'https://raulresume.herokuapp.com'

  const Get = async endpoint => {
    await FETCH.get<UserResponse>({ url: baseURL + endpoint })
      .then(res => {
        setUser(res)
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const Post = async (endpoint, payload, token) => {
    let response = null
    await FETCH.post({
      url: baseURL + endpoint,
      payload,
      token,
    })
      .then(res => {
        response = res
      })
      .catch(err => {
        console.log(err.message)
      })
    return response
  }

  const Put = async (endpoint, payload, token) => {
    await FETCH.patch({
      url: baseURL + endpoint,
      payload,
      token,
    })
      .then(() => {
        console.log('Updated Successfully')
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const Delete = async (endpoint, token) => {
    await FETCH.delete({
      url: baseURL + endpoint,
      token,
    })
      .then(() => {
        console.log('Deleted Successfully')
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    Get('/api/user/1/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const contextData: UserContextType = {
    user,
    Post,
    Put,
    Delete,
  }

  return (
    <UserContext.Provider value={contextData}>
      {user ? children : null}
    </UserContext.Provider>
  )
}
