import React from "react";
import PropTypes from "prop-types";
import { GenericPageTemplate } from "../../templates/generic-page";
import Environment from "../Environment";

const GenericPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <Environment>
      <GenericPageTemplate content={widgetFor("body")} {...data} />
    </Environment>
  );
};

GenericPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default GenericPagePreview;
