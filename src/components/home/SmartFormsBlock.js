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
  width: '100%',
  marginTop: '45vh',
  marginBottom: '20vh',
  fontWeight: 200
}, ({theme}) => ({
  maxWidth: theme.maxWidth,
  color: theme.mid.color,
  [theme.media.max.md]: {
    marginTop: '15vh'
  }
}))
