import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import useToggle from '../hooks/useToggle'
import logo from '../img/logo_white.svg'
import HamburgerIcon from '../img/icons/menu'
import CloseIcon from '../img/icons/close'
import { Link } from 'gatsby'

export default () => {
  const [isOpen, toggleIsOpen] = useToggle(false)
  return (
    <div>
      <MenuButton onClick={toggleIsOpen}>
        <HamburgerIcon />
      </MenuButton>
      <Menu isOpen={isOpen} onRequestClose={toggleIsOpen} />
    </div>
  )
}

const MenuButton = styled('button')({
  background: 'none',
  padding: 0,
  border: 'none',
  outline: 'none',
  '& svg': {
    width: 30
  }
}, ({theme}) => ({
  fill: theme.dark.color
}))

const Menu = ({isOpen, onRequestClose}) => {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    if(isOpen) setHidden(false)
  }, [isOpen])

  const handleTransitionEnd = () => {
    if(!isOpen){
      setHidden(true)
    }
  }

  return (
    <MenuWrapper isOpen={isOpen} hidden={hidden && !isOpen} onTransitionEnd={handleTransitionEnd}>
      <MenuHeader>
        <Logo src={logo} />
        <CloseButton onClick={onRequestClose}>
          <CloseIcon />
        </CloseButton>
      </MenuHeader>
      <MenuBody>
        <Link to='/'>SOS Enterprise</Link>
        <Link to='/news'>News</Link>
        <Link to='/careers'>Careers</Link>
      </MenuBody>
      <Link to='/request-demo' className='cta'>Request a Demo</Link>
    </MenuWrapper>
  )
}

const MenuWrapper = styled('div')({
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 100,
  transition: 'transform 300ms',
  willChange: 'transform'
}, ({isOpen, theme, hidden}) => ({
  transform: `translateX(${isOpen ? '0' : '100%'})`,
  background: theme.primary.color,
  color: theme.primary.textOn,
  visibility: hidden ? 'hidden' : '',
  '& a.cta': {
    background: theme.primary.textOn,
    color: theme.primary.color,
    width: '100%',
    padding: '15px 10px',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 500,
    textDecoration: 'none'
  }
}))

const MenuHeader = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: 20,
  borderBottom: `2px solid rgba(255, 255, 255, 0.46)`
})

const Logo = styled('img')({
  width: 140
})

const CloseButton = styled('button')({
  padding: 0,
  background: 'none',
  border: 'none',
  color: 'inherit',
  marginLeft: 'auto',
  '& svg': {
    width: 30,
    fill: 'currentColor'
  }
})

const MenuBody = styled('nav')({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 0 0',
  padding: 20,
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 26,
    fontWeight: 500,
    margin: '15px 0px'
  }
})
