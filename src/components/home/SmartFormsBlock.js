import React from 'react'
import styled from '@emotion/styled'
import DNDAnimation from './DNDAnimation'

export default () => {

  return (
    <Wrapper>
      <DNDAnimation/>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  width: '100%',
  marginTop: 100
}, ({theme}) => ({
  maxWidth: theme.maxWidth
}))
