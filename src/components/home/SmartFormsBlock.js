import React from 'react'
import styled from '@emotion/styled'
import DNDAnimation from './DNDAnimation'
import { Title, Description } from './Shell'

export default ({title, description}) => {

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>
        {description}
      </Description>
      <DNDAnimation/>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: '30vh',
  marginBottom: '10vh',
  fontWeight: 200,
  alignItems: 'center',
  '& svg': {
    width: '90%'
  }
}, ({theme}) => ({
  maxWidth: theme.maxWidth,
  color: theme.mid.color,
  [theme.media.max.lg]: {
    alignItems: 'center',
    '& svg': {
      width: '90%'
    }
  },
  [theme.media.max.md]: {
    marginTop: '15vh',
    flexDirection: 'column',
    alignItems: 'center',
    '& svg': {
      width: '90%'
    }
  }
}))
