import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

export default () => {

  return (
    <Footer>
      <InnerWrapper>
        {/* Footer */}
      </InnerWrapper>
    </Footer>
  )
}

const Footer = styled('footer')({
  display: 'flex',
  justifyContent: 'center'
}, ({theme}) => ({
  background: theme.dark.color,
  color: theme.dark.textOn
}))

const InnerWrapper = styled('div')({
  width: '100%',
  maxWidth: 1200
})
