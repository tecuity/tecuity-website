import React from 'react'
import styled from '@emotion/styled'
import aboutBGLeft from '../../img/about-bg-left.svg'
import aboutBGRightt from '../../img/about-bg-right.svg'
import logoSrc from '../../img/logo.svg'

export default () => {

  return (
    <Wrapper>
      <Logo src={logoSrc} />
      <Mission>
        Empowering government<br/>
        <Tagline>since 2005</Tagline>
      </Mission>
      <BGLeftImg src={aboutBGLeft} />
      <BGRightImg src={aboutBGRightt} />
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  minHeight: '50vw',
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // paddingBottom: 'calc(60vh - 40vw)'
}, ({theme}) => ({
  // [theme.media.max.lg]: {
  //   minHeight: '65vh'
  // },
  // [theme.media.max.md]: {
  //   minHeight: '55vh'
  // },
  [theme.media.max.sm]: {
    minHeight: '35vh'
  }
}))

const Logo = styled('img')({
  width: '100%',
  maxWidth: '26vw'
}, ({theme}) => ({
  [theme.media.max.sm]: {
    width: '50%',
    maxWidth: 200
  }
}))

const Mission = styled('h1')({
  textAlign: 'center',
  fontSize: '4vw',
  fontWeight: 500,
  width: '100%',
  maxWidth: 700
}, ({theme}) => ({
  color: theme.mid.color,
  [theme.media.max.sm]: {
    fontSize: 20,
  }
}))

const Tagline = styled('span')({
  fontWeight: 300
})

const BGLeftImg = styled('img')({
  position: 'absolute',
  left: 0,
  top: '5%',
  width: '21%',
  zIndex: -1
}, ({theme}) => ({
  [theme.media.max.sm]: {
    // width: 'calc(100% + 100px)',
    // left: -50
    top: '3%',
    left: '-10%',
    width: '35%'
  }
}))

const BGRightImg = styled('img')({
  position: 'absolute',
  right: 0,
  top: '5%',
  width: '21%',
  zIndex: -1
}, ({theme}) => ({
  [theme.media.max.sm]: {
    right: '-10%',
    top: '10%',
    width: '35%'
    // width: 'calc(100% + 100px)',
    // left: -50
  }
}))
