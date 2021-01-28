import React from 'react'
import styled from '@emotion/styled'
import { Title, Description } from '../home/Shell'
import AgenciesImage from '../../img/rules_agencies.svg'

export default ({title, description}) => {
  const descapedTitle = title.split('\\n').join('\n')
  
  return (
    <Wrapper>
      <Column left>
        <Img src={AgenciesImage} alt="Examples of state agencies all feeding into a single application." />
      </Column>
      <Column>
        <Title>{descapedTitle}</Title>
        <Description>{description}</Description>
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled('article')({
  display: 'flex',
  flexDirection: 'row',
  minHeight: '30vh',
  marginBottom: '10vh',
  marginTop: '25vh',
  width: '100%'
}, ({theme}) => ({
  maxWidth: theme.maxWidth,
  [theme.media.max.md]: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  }
}))

const Column = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  justifyContent: 'center',
}, ({theme, left}) => ({
  alignItems: 'center',
  '& svg': {
    width: '100%',
    maxWidth: 350
  },
  [theme.media.max.lg]: {
    alignItems: 'center'
  },
  [theme.media.max.md]: {
    width: '100vw',
    maxWidth: 'none',
    alignItems: 'center',
    padding: left ? 20 : 0,
    '& svg': {
      width: '80%',
      maxWidth: 400
    }
  }
})
)

const Img = styled('img')`
  max-width: 400px;
`