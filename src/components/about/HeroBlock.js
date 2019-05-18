import React from 'react'
import styled from '@emotion/styled'
import aboutBGsrc from '../../img/about-bg.svg'
import logoSrc from '../../img/logo.svg'

export default () => {

  return (
    <Wrapper>
      <Logo src={logoSrc} />
      <Mission>
        Empowering government<br/>
        <Tagline>since 2005</Tagline>
      </Mission>
      <BGImg src={aboutBGsrc} />
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  minHeight: '60vh',
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: 'calc(60vh - 45vw)'
})

const Logo = styled('img')({
  width: '100%',
  maxWidth: '26vw'
})

const Mission = styled('h1')({
  textAlign: 'center',
  fontSize: '4vw',
  fontWeight: 500,
  width: '55vh',
  minWidth: 500
}, ({theme}) => ({
  color: theme.mid.color
}))

const Tagline = styled('span')({
  fontWeight: 300
})

const BGImg = styled('img')({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  zIndex: -1
})
