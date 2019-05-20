import React from 'react'
import styled from '@emotion/styled'
import aboutBGLeft from '../../img/about-bg-left.svg'
import aboutBGRightt from '../../img/about-bg-right.svg'
import logoSrc from '../../img/logo.svg'

export default () => {

  return (
    <Wrapper>
      <Logo src={logoSrc} alt="Tecuity" />
      <Mission>
        Empowering government<br/>
        <Tagline>since 2005</Tagline>
      </Mission>
      <BGLeftWrapper>
        <BGLeftImg src={aboutBGLeft} aria-hidden />
      </BGLeftWrapper>
      <BGRightWrapper>
        <BGRightImg src={aboutBGRightt} aria-hidden />
      </BGRightWrapper>
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
  },
  [theme.media.min.lg]: {
    fontSize: '3.5vw',
    maxWidth: 'none'
  }
}))

const Tagline = styled('span')({
  fontWeight: 300
})

const BGLeftWrapper = styled('div')({
  position: 'absolute',
  left: 0,
  top: '5%',
  width: '21%',
  zIndex: -1,
  overflow: 'hidden'
}, ({theme}) => ({
  [theme.media.max.sm]: {
    top: '3%',
    width: '35%'
  }
}))

const BGLeftImg = styled('img')({
  width: '100%'
}, ({theme}) => ({
  [theme.media.max.sm]: {
    marginLeft: '-20%',
  }
}))

const BGRightWrapper = styled('div')({
  position: 'absolute',
  right: 0,
  top: '5%',
  width: '21%',
  zIndex: -1,
  overflow: 'hidden'
}, ({theme}) => ({
  [theme.media.max.sm]: {
    top: '10%',
    width: '35%'
  }
}))

const BGRightImg = styled('img')({
  width: '100%'
}, ({theme}) => ({
  [theme.media.max.sm]: {
    marginLeft: '20%',
  }
}))
