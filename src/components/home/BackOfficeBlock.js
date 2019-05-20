import React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { Title, Description } from './Shell'
import SearchImg from '../../img/searching.svg'
import ReportsImg from '../../img/automated-reports.svg'
import ScanningImg from '../../img/scanning.svg'

const BackOfficeBlock = ({title, description}) => {

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>
        {description}
      </Description>
      <Row>
        <ImgWrapper>
          <Img src={SearchImg} searching aria-hidden/>
          <ImgTitle>
            <UnderlineWrapper>
              Comprehensive Search
            </UnderlineWrapper>
          </ImgTitle>
        </ImgWrapper>
        <ImgWrapper>
          <Img src={ReportsImg} automated aria-hidden/>
          <ImgTitle>
            <UnderlineWrapper>
              Automated Reports
            </UnderlineWrapper>
          </ImgTitle>
        </ImgWrapper>
        <ImgWrapper>
          <Img src={ScanningImg} style={{marginTop: 10}} aria-hidden />
          <ImgTitle>
            <UnderlineWrapper>
              Simple Scanning
            </UnderlineWrapper>
          </ImgTitle>
        </ImgWrapper>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '30vh',
  marginBottom: '15vh',
  width: '100%'
}, ({theme}) => ({
  maxWidth: theme.maxWidth
}))

const Row = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%'
}, ({theme}) => ({
  [theme.media.max.md]: {
    flexDirection: 'column'
  }
}))

const ImgWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '33.33333%'
}, ({theme}) => ({
  [theme.media.max.md]: {
    width: '100%'
  }
}))

const ImgTitle = styled('h2')({
  width: '100%',
  textAlign: 'center',
  fontWeight: 400,
  fontSize: 22,
  marginBottom: 50
}, ({theme}) => ({
  color: theme.mid.color,
  [theme.media.max.md]: {
    fontSize: 24
  }
}))

const UnderlineWrapper = styled('span')({
  position: 'relative',
  textAlign: 'center',
  display: 'block'
}, ({theme}) => ({
  color: theme.mid.color,
  padding: '0px 10px',
  borderRadius: 16
}))

const Img = styled('img')({
  flex: '0 0 auto',
  width: '80%'
}, ({theme, automated, searching}) => ({
  [theme.media.max.md]: {
    width: automated ? '35%' : searching ? '50%' : '60%',
    maxWidth: 300
  }
}), ({automated, theme}) => automated ? {
  width: '40%',
  [theme.media.max.lg]: {
    maxWidth: 200
  }
} : null, ({searching}) => searching ? {
  width: '70%'
} : null)

export default withTheme(BackOfficeBlock)
