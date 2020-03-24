import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import rocket from "../../img/rocket.svg";

export default () => {
  return (
    <InfoContainer>
      <Title>Help us build the future</Title>
      <Text>
        Join our team of dedicated professionals making government services
        accessible, beautiful, and fun.
      </Text>
      <Graphic alt="rocket taking flight" src={rocket} />
    </InfoContainer>
  );
};

const InfoContainer = styled.div(
  {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginRight: "2rem"
  },
  ({ theme }) => ({
    [theme.media.max.md]: {
      marginRight: 0
    }
  })
);

const Title = styled.h1({
  color: "#666666",
  display: "block",
  fontSize: "3rem",
  fontWeight: 300,
  margin: "1rem 0",
  textAlign: "center"
});

const Text = styled.p({
  color: "#666666",
  display: "block",
  fontSize: "1.25rem",
  margin: "1rem 0",
  textAlign: "center"
});

const Graphic = styled.img(
  {
    display: "block",
    padding: "1rem 3rem",
    width: "100%"
  },
  ({ theme }) => ({
    [theme.media.max.md]: {
      order: -1
    }
  })
);
