import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import rocket from "../../img/rocket-to-moon.svg";
import rocketMobile from "../../img/rocket-to-moon-mobile.svg";

export default ({ title, subtitle }) => {
  return (
    <InfoContainer>
      <Graphic alt="rocket taking flight" src={rocket} />
      <MobileGraphic alt="rocket taking flight" src={rocketMobile} />
      <ScootUp>
        <Title>{title}</Title>
        <Text>{subtitle}</Text>
      </ScootUp>
    </InfoContainer>
  );
};

const InfoContainer = styled.div(
  {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "column"
  },
  ({ theme }) => ({
    [theme.media.max.md]: {}
  })
);

const Title = styled.h1({
  color: "#666666",
  display: "block",
  fontSize: "3rem",
  fontWeight: 300,
  margin: "1rem auto",
  textAlign: "center"
});

const Text = styled.p({
  color: "#666666",
  display: "block",
  fontSize: "1.25rem",
  margin: "1rem auto",
  maxWidth: "32rem",
  textAlign: "center"
});

const Graphic = styled.img(
  {
    display: "block",
    maxWidth: 1200,
    width: "100%"
  },
  ({ theme }) => ({
    [theme.media.max.md]: {
      display: "none",
      order: -1
    }
  })
);

const MobileGraphic = styled.img(
  {
    display: "none",
    maxWidth: 1200,
    width: "100%"
  },
  ({ theme }) => ({
    [theme.media.max.md]: {
      display: "block",
      order: -1
    }
  })
);

const ScootUp = styled.div(
  {
    marginTop: "-7rem",
    width: "100%"
  },
  ({ theme }) => ({
    [theme.media.max.md]: {
      marginTop: 0
    }
  })
);
