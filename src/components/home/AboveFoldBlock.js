import React from 'react'
import styled from '@emotion/styled'
import sosLogo from '../../img/sos_enterprise.svg'
import { Link } from 'gatsby'
import CapitolAnimation from './CapitolAnimation'

export default () => {

  return (
    <Wrapper>
      <CTA>
        <Logo src={sosLogo} />
        <Subtitle>
          Smart Solutions for Smart Government
        </Subtitle>
        <Link to='/request-demo'>
          Request a Demo
        </Link>
      </CTA>
      <AnimationWrapper>
        <CapitolAnimation />
      </AnimationWrapper>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  padding: '30px 0px',
  marginTop: 50,
  // minHeight: '60vh',
  width: '100%'
}, ({theme}) => ({
  maxWidth: theme.maxWidth,
  [theme.media.max.md]: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    marginTop: '1vw'
  }
}))

const CTA = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '1 0 auto',
  width: '50%',
  '& a': {
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: 500,
    padding: '10px 20px',
    paddingBottom: '6px',
    marginTop: 15,
    border: 'none',
    textDecoration: 'none'
  }
}, ({theme}) => ({
  '& a': {
    background: theme.primary.color,
    color: theme.primary.textOn
  },
  [theme.media.max.md]: {
    width: '100%'
  }
}))

const Logo = styled('img')({
  width: '100%',
  maxWidth: 300
}, ({theme}) => ({
  [theme.media.max.md]: {
    maxWidth: 240
  }
}))

const Subtitle = styled('span')({
  fontSize: 20,
  marginTop: 15,
  paddingLeft: 5,
  textAlign: 'center'
})

const AnimationWrapper = styled('div')({
  flex: '1 0 auto',
  width: '50%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
}, ({theme}) => ({
  [theme.media.max.md]: {
    width: '100%',
    padding: '10vw',
    paddingTop: 0,
    justifyContent: 'center'
  }
}))
