import React from 'react'

import { LoadingStyle } from './styles'

interface Props {
  isLoading: boolean
  children?: React.ReactNode
}

export const Loading: React.FC<Props> = props => {
  return (
    <LoadingStyle>
      <div className={props.isLoading ? 'loader' : ''}>
        <div className={props.isLoading ? 'spinner' : ''}></div>
      </div>
      {props.children}
    </LoadingStyle>
  )
}
