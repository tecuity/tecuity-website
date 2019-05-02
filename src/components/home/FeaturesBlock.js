import React from 'react'
import styled from '@emotion/styled'
import pageDivider from '../../img/page-divider.svg'
import features from './features'

export default () => {

  return (
    <Wrapper>
      <PageDivider src={pageDivider} />
      {/* <FeatureBlocksWrapper>
        {
          features.map((f, i) => (
            <Feature key={i}>{f}</Feature>
          ))
        }
      </FeatureBlocksWrapper> */}
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  width: '100%',
  position: 'relative',
  zIndex: -1
})

const PageDivider = styled('img')({
  width: '100%',
  marginTop: '-10vh',
  marginBottom: '-100%',
  position: 'absolute',
  top: 0,
  left: 0,

})

const FeatureBlocksWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap'
}, ({theme}) => ({
  maxWidth: theme.maxWidth
}))

const Feature = ({children}) => {

  return (
    <FeatureBlock>
      {children}
    </FeatureBlock>
  )
}

const FeatureBlock = styled('div')({
  fontSize: 24,
  padding: '10px 15px',
  borderRadius: 8,
  margin: 5
}, ({theme}) => ({
  background: theme.primary.color,
  color: theme.primary.textOn
}))
