import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import logo from '../../img/rules_logo.svg'

export default () => {

  return (
    <Wrapper>
      <Logo src={logo} />
      <Description>
        Ready to learn more about the leading solution for administrative rules management?
      </Description>
      <Row>
        <Link to='/request-demo'>
          Request a Demo
          <TextOnTop aria-hidden>
            Request a Demo
          </TextOnTop>
          <Reflection />
        </Link>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled('article')({
  width: '100%',
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 30,
  marginBottom: '15vh'
}, ({theme}) => ({
  maxWidth: theme.maxWidth,
  [theme.media.max.sm]: {
    padding: 15
  }
}))

const Logo = styled('img')({
  width: '100%',
  maxWidth: 600
}, ({theme}) => ({
  [theme.media.max.sm]: {
    maxWidth: 400
  }
}))

const Row = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: 30,
  '& a': {
    marginTop: 20,
    textTransform: 'uppercase',
    fontSize: 28,
    fontWeight: 500,
    padding: '10px 20px',
    paddingBottom: '6px',
    border: 'none',
    textDecoration: 'none',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&:hover div':{
      transform: 'translateX(200%)'
    }
  }
}, ({theme}) => ({
  '& a': {
    background: theme.rules.color,
    color: theme.rules.color
  },
  [theme.media.max.md]: {
    width: '100%'
  },
  [theme.media.max.sm]: {
    padding: 0,
    marginTop: 15
  }
}))

const Description = styled('p')({
  fontSize: 24,
  margin: '50px 0px 0px 0px',
  textAlign: 'center',
  width: '100%',
}, ({theme}) => ({
  color: theme.dark.color
}))

const TextOnTop = styled('span')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 5,
  padding: 5,
  paddingTop: 7,
  pointerEvents: 'none'
}, ({theme}) => ({
  color: theme.primary.textOn
}))

const Reflection = styled('div')({
  position: 'absolute',
  left: '-100%',
  top: -20,
  width: '100%',
  height: 'calc(100% + 40px)',
  transition: 'transform 500ms',
  pointerEvents: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '30%',
    top: 0,
    width: '15%',
    height: '100%',
    background: 'rgba(255,255,255,.6)',
    transform: 'rotate(-20deg)'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '15%',
    top: 0,
    width: '8%',
    height: '100%',
    background: 'rgba(255,255,255,.6)',
    transform: 'rotate(-20deg)'
  }
})
