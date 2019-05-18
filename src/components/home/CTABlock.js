import React from 'react'
import styled from '@emotion/styled'
import CTAAnimation from './CTAAnimation'

export default () => {

  return (
    <Wrapper>
      <CTAAnimation/>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})
