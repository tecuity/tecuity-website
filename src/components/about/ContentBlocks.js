import React from "react";
import styled from "@emotion/styled";
import ContentBlock from "./ContentBlock";
import teamIcon from "../../img/team-icon.svg";
import technologyIcon from "../../img/technology-icon.svg";
import designIcon from "../../img/design-icon.svg";

export default ({
  block1Title,
  block1Description,
  block2Title,
  block2Description,
  block3Title,
  block3Description
}) => (
  <Wrapper>
    <Row>
      <ContentBlock
        icon={teamIcon}
        title={block1Title}
        description={block1Description}
      />
    </Row>
    <Row>
      <ContentBlock
        reversed
        icon={technologyIcon}
        title={block2Title}
        description={block2Description}
      />
    </Row>
    <Row>
      <ContentBlock
        icon={designIcon}
        title={block3Title}
        description={block3Description}
      />
    </Row>
  </Wrapper>
);

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: '3vw'
});

const Row = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  margin: '7.5vh 0vh'
});
