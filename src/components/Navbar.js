import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import styled from '@emotion/styled'

const Navbar = () => {

  return (
    <Header>
      <InnerWrapper>
        <Logo src={logo} />
        <Nav>
          <Link to='/'>SOS Enterprise</Link>
          <Link to='/news'>News</Link>
          <Link to='/careers'>Careers</Link>
          <Link to='/request-demo' className='cta'>Request a Demo</Link>
        </Nav>
      </InnerWrapper>
    </Header>
  )
}
export default Navbar

const Header = styled('header')({
  height: 70,
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
  borderBottom: '1px solid rgb(218, 218, 218)'
})

const Logo = styled('img')({
  width: 140
})

const Nav = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  '& a': {
    margin: '0px 20px',
    textDecoration: 'none',
    color: 'inherit',
    fontWeight: 400,
    '&:last-child': {
      marginRight: 0
    }
  }
}, ({theme}) => ({
  '& a.cta': {
    background: theme.primary.color,
    color: theme.primary.textOn,
    padding: '5px 10px',
    fontWeight: 500
  }
}))

const InnerWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: 1200
})
