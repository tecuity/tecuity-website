import React from 'react'
import styled from '@emotion/styled'

export const Title = styled('h2')({
  fontSize: 60,
  fontWeight: 200,
  textAlign: 'center',
  margin: 0
}, ({theme}) => ({
  color: theme.mid.color,
  [theme.media.max.md]: {
    fontSize: 40
  }
}))

export const Description = styled('p')({
  fontSize: 24,
  textAlign: 'center',
  marginTop: 10
}, ({theme}) => ({
  [theme.media.max.md]: {
    padding: '0px 30px'
  }
}))
