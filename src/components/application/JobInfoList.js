import React from "react";
import styled from "@emotion/styled";
import Remark from "remark";
import toHAST from "mdast-util-to-hast";
import hastToHTML from "hast-util-to-html";
import YamlData from "../../pages/careers/openPositions.yaml";
import JobInfo from "./JobInfo";

import styles from "./JobInfo.module.scss";

export default function JobInfoList(props) {
  const positions = YamlData.openPositions;
  let remark = new Remark();
  let convertedPositions = [];
  for (let i = 0; i < positions.length; ++i) {
    let htmlString = "";
    if (positions[i].description) {
      // Convert the markdown string into a markdown abstract syntax tree
      let mdast = remark.parse(positions[i].description);
      // Convert the markdown abstract syntax tree to an HTML abstract syntax Tree
      let hast = toHAST(mdast);
      // Convert the HTML abstract syntax tree to an html string
      htmlString = hastToHTML(hast);
    }

    convertedPositions[i] = {
      name: positions[i].name,
      description: htmlString,
      value: positions[i].value,
    };
  }

  const jobList = convertedPositions.map((job) => (
    <JobInfo
      name={job.name}
      description={job.description}
      key={"InfoItem" + job.value}
    />
  ));

  return <DetailsContainer>{jobList}</DetailsContainer>;
}

const DetailsContainer = styled.div(
  {
    flex: 1,
    flexDirection: "column",
    margin: "2rem 2rem 0 0",
  },
  ({ theme }) => ({
    [theme.media.max.md]: {
      boxShadow: "unset",
      margin: "0 0 2rem 0",
      padding: 0,
    },
  })
);
