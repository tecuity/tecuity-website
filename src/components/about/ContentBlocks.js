import React from "react";
import styled from "@emotion/styled";
import ContentBlock from "./ContentBlock";
import teamIcon from "../../img/team-icon.svg";
import technologyIcon from "../../img/technology-icon.svg";
import designIcon from "../../img/design-icon.svg";

export default () => (
  <Wrapper>
    <Row>
      <ContentBlock
        icon={teamIcon}
        title="A Dedicated Team"
        description="Tecuity boasts 16 years of experience working directly with Secretary of State offices. Our team provides our customers with direct access to experts who have in-depth business and technical knowledge, and our relentless focus on our customers' success has resulted in long-term business relationships."
      />
    </Row>
    <Row>
      <ContentBlock
        reversed
        icon={technologyIcon}
        title="Smart Technology"
        description="Our cutting-edge solutions employ the latest in web, mobile, and desktop technologies, all while maximizing compatibility with legacy systems. Optimized for performance and scalability, our software is always ready to adapt to your evolving needs and requirements."
      />
    </Row>
    <Row>
      <ContentBlock
        icon={designIcon}
        title="Human by Design"
        description="At Tecuity, we firmly believe that good software must be human-focused and accessible. Our development teams work closely with on-staff user-experience designers to craft software that is easy to use and intuitive."
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
