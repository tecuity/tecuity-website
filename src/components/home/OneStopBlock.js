import React from 'react'
import styled from '@emotion/styled'
import { Title, Description } from './Shell'
import OneStopAnimation from './OneStopAnimation'

export default () => {

  return (
    <Wrapper>
      <Column>
        <Title>Business One-Stop</Title>
        <Description>The SOS Enterprise Business One-Stop is a Data Exchange Network that is a cloud-hosted solution that provides integrated actors the ability to both subscribe and publish information to the network.</Description>
      </Column>
      <Column right>
        <OneStopAnimation />
      </Column>
    </Wrapper>
  )
}

const Wrapper = styled('article')({
  display: 'flex',
  flexDirection: 'row',
  minHeight: '30vh',
  marginBottom: '20vh'
}, ({theme}) => ({
  maxWidth: theme.maxWidth,
  [theme.media.max.md]: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  }
}))

const Column = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  maxWidth: '50%',
  justifyContent: 'center',
  alignItems: 'center'
}, ({right}) => right ? {
  alignItems: 'flex-end',
  '& svg': {
    maxWidth: 400
  }
} : null,
({theme}) => ({
  [theme.media.max.md]: {
    width: '100%',
    maxWidth: 'none',
    alignItems: 'center',
    '& svg': {
      maxWidth: '80%'
    }
  }
})
)
