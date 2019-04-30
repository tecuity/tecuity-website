import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

export default () => {

  return (
    <Footer>
      Shared Footer
    </Footer>
  )
}

const Footer = styled('footer')({

}, ({theme}) => ({
  background: theme.dark.color,
  color: theme.dark.textOn
}))
