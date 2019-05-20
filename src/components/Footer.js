import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import logo from '../img/logo_white.svg'

export default () => {

  return (
    <Footer>
      <InnerWrapper>
        <Logo src={logo} />
        <Navigation>
          <Link to='/'>SOS Enterprise</Link>
          <Link to='/about'>About</Link>
          {/* <Link to='/news'>News</Link> */}
          <Link to='/request-demo' className='cta'>Request a Demo</Link>
        </Navigation>
      </InnerWrapper>
    </Footer>
  )
}

const Footer = styled('footer')({
  display: 'flex',
  justifyContent: 'center',
  padding: '30px 0px'
}, ({theme}) => ({
  background: theme.mid.color,
  color: theme.mid.textOn,
  [theme.media.max.lg]: {
    padding: '30px'
  }
}))

const InnerWrapper = styled('div')({
  display: 'flex',
  width: '100%'
}, ({theme}) => ({
  maxWidth: theme.maxWidth,
  [theme.media.max.md]: {
    flexDirection: 'column-reverse',
    alignItems: 'center'
  }
}))

const Navigation = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  // marginLeft: 'auto'
  marginLeft: 'auto'
}, ({theme}) => ({
  '& a': {
    color: theme.mid.textOn,
    textDecoration: 'none',
    fontSize: 20,
    fontWeight: 300,
    marginLeft: 30,
    '&:first-of-type': {
      marginLeft: 0
    }
  },
  [theme.media.max.md]: {
    flexDirection: 'column',
    textAlign: 'center',
    marginLeft: 0,
    marginBottom: 30,
    '& a': {
      marginLeft: 0,
      marginTop: 10
    }
  }
}))

const Logo = styled('img')({
  width: '100%',
  maxWidth: 140
})
