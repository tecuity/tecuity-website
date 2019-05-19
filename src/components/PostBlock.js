import React from 'react'
import styled from '@emotion/styled'
import panels1 from "../img/panels-1.svg";
import panels2 from "../img/panels-2.svg";

export default ({frontmatter: {title, date}, excerpt, index}) => (
  <Wrapper>
    <InnerWrapper>
      <Title>{title}</Title>
      <DateWrapper>{date}</DateWrapper>
      <Excerpt>{excerpt}</Excerpt>
      {
        index%4 === 0 &&
        <Panels1 src={panels1} />
      }
      {
        (index%4) - 1 === 0 &&
        <Panels2 src={panels2} />
      }
    </InnerWrapper>
  </Wrapper>
)

const Wrapper = styled('article')({
  width: '100%',
  marginBottom: 40
})

const InnerWrapper = styled('div')({
  position: 'relative',
  background: '#ffffff',
  padding: 30,
  boxShadow: `0 50px 100px -20px rgba(50,50,93,.15), 0 30px 40px -30px rgba(0,0,0,.1), 0 -18px 60px -10px rgba(0,0,0,.015)`
})

const Title = styled('h1')({
  fontWeight: 300,
  fontSize: 24
})

const DateWrapper = styled('span')({

})

const Excerpt = styled('p')({

})

const Panels1 = styled("img")({
  position: "absolute",
  left: "-20%",
  top: -50,
  width: "40%",
  zIndex: -1
});

const Panels2 = styled("img")({
  position: "absolute",
  right: "-15%",
  bottom: -50,
  width: "40%",
  zIndex: -2
});
