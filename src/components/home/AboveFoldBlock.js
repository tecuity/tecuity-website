import React from 'react'
import styled from '@emotion/styled'
import sosLogo from '../../img/sos_enterprise.svg'
import CapitolAnimation from './CapitolAnimation'

export default () => {

  return (
    <Wrapper>
      <CTA>
        <Logo src={sosLogo} />
        <Subtitle>
          Smart Solutions for Smart Government
        </Subtitle>
        <CTAButton>
          Request a Demo
        </CTAButton>
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
  maxWidth: theme.maxWidth
}))

const CTA = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '1 0 auto',
  width: '50%'
})

const Logo = styled('img')({
  width: '100%',
  maxWidth: 300
})

const Subtitle = styled('span')({
  fontSize: 20,
  marginTop: 15,
  paddingLeft: 5
})

const CTAButton = styled('button')({
  textTransform: 'uppercase',
  fontSize: 24,
  fontWeight: 500,
  padding: '10px 20px',
  paddingBottom: '6px',
  marginTop: 15,
  border: 'none'
}, ({theme}) => ({
  background: theme.primary.color,
  color: theme.primary.textOn
}))

const AnimationWrapper = styled('div')({
  flex: '1 0 auto',
  width: '50%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
})
