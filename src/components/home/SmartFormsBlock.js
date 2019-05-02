import React from 'react'
import styled from '@emotion/styled'
import DNDAnimation from './DNDAnimation'
import { Title, Description } from './Shell'

export default () => {

  return (
    <Wrapper>
      <Title>Smart Forms</Title>
      <Description>
        Tecuity has developed game-changing technology that allows our customers to easily create and manage their own Smart Forms with drag and drop functionality. This empowers our customers to have full control and design capabilities in capturing data required for business registries and related services.
      </Description>
      <DNDAnimation/>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  width: '100%',
  marginTop: 300,
  fontWeight: 200
}, ({theme}) => ({
  maxWidth: theme.maxWidth,
  color: theme.mid.color
}))
