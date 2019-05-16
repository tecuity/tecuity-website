import React from 'react'
import styled from '@emotion/styled'

export default ({quote, author}) => (
  <Wrapper>
    <Quote>{quote}</Quote>
    <Author>{author}</Author>
  </Wrapper>
)

const Wrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px 20px',
  marginBottom: '15vh'
}, ({theme}) => ({
  background: theme.sos.rgbaFunction(.04),
  color: theme.dark.color
}))

const Quote = styled('p')({
  width: '100%',
  maxWidth: 600,
  fontSize: 28,
  display: 'block',
  margin: 0,
  fontWeight: 500,
  textAlign: 'center',
  whiteSpace: 'pre-wrap'
}, ({theme}) => ({
  [theme.media.max.md]: {
    fontSize: 22
  }
}))

const Author = styled('span')({
  width: '100%',
  maxWidth: 500,
  textAlign: 'center',
  marginTop: 20,
  fontSize: 18,
  fontStyle: 'italic'
})
