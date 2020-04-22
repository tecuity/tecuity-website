import React, { useState, useRef, useCallback } from "react";
import styled from "@emotion/styled";
import Collapsible from "react-collapsible";

import styles from "./JobInfo.module.scss";

export default function JobInfo(props) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      classParentString={styles.collapsible}
      contentInnerClassName={styles.collapsibleContent}
      easing="ease"
      onOpening={() => setOpen(true)}
      onClosing={() => setOpen(false)}
      transitionTime={300}
      triggerTagName="div"
      trigger={<Trigger name={props.name} open={open} />}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: props.description,
        }}
      />
    </Collapsible>
  );
}

const CollapsibleTrigger = styled.div({
  alignItems: "center",
  color: "#666666",
  cursor: "pointer",
  display: "flex",
  fontSize: "1.5rem",
  height: "100%",
  justifyContent: "space-between",
  padding: "1rem",
  width: "100%",
});

const CSSTriangle = styled.div({
  border: "10px solid transparent",
  borderTopColor: "#ADADAD",
  top: 0,
  height: 0,
  left: 0,
  position: "absolute",
  width: 0,
});

function Trigger(props) {
  return (
    <CollapsibleTrigger>
      <span>{props.name}</span>
      <div
        className={`${styles.triangleContainer} ${
          props.open ? styles.openIcon : ""
        }`}
      >
        <CSSTriangle />
      </div>
    </CollapsibleTrigger>
  );
}
