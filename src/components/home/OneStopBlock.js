import React from 'react'
import styled from '@emotion/styled'
import { Title, Description } from './Shell'
import OneStopAnimation from './OneStopAnimation'

export default ({title, description}) => {

  return (
    <Wrapper>
      <Column>
        <Title>{title}</Title>
        <Description>{description}</Description>
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
  justifyContent: 'center'
}, ({theme, right}) => ({
  alignItems: right ? 'flex-end' : 'center',
  '& svg': {
    maxWidth: 400
  },
  [theme.media.max.md]: {
    width: '100vw',
    maxWidth: 'none',
    alignItems: 'center',
    flexDirection: 'row',
    '& svg': {
      maxWidth: '80%',
      width: '100%'
    }
  }
})
)
