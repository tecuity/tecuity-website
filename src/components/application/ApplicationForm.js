import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import DropZone from "react-dropzone";
import dropGraphic from "../../img/file_upload.svg";

export default () => {
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const formRef = useRef();

  const handleChange = ({ target }) =>
    setForm(f => ({
      ...f,
      [target.name]: { ...(f[target.name] || {}), value: target.value }
    }));

  const handleFileDrop = e => {
    e.preventDefault();
    let files = [];
    for (let i = 0; i < e.dataTransfer.items.length; i++) {
      if (e.dataTransfer.items[i].kind === "file") {
        const file = e.dataTransfer.items[i].getAsFile();
        if (file) files.push(file);
      }
    }
    if (files.length)
      this.handleChange({ target: { files, name: this.props.fieldId } });
  };

  return (
    <FormContainer>
      <Form>
        <FlexRow>
          <Field
            label="First Name"
            name="firstname"
            onChange={handleChange}
            value={(form.firstname || {}).value}
            attemptedSubmit={attemptedSubmit}
            required
          />
          <Field
            label="Last Name"
            name="lastname"
            onChange={handleChange}
            value={(form.lastname || {}).value}
            attemptedSubmit={attemptedSubmit}
            required
          />
        </FlexRow>
        <Field
          label="Interest"
          name="interest"
          onChange={handleChange}
          value={(form.interest || {}).value}
          attemptedSubmit={attemptedSubmit}
          required
        />
        {/* <DropArea htmlFor="resume-upload" onDrop={handleFileDrop}>
          <HiddenInput type="file" id="resume-upload" />
          <DropGraphic src={dropGraphic} />
          <DropTextContainer>
            <DropText>
              Drag &amp; drop your resume here or, click to upload.
            </DropText>
            <DropText smaller>(.pdf or .docx)</DropText>
          </DropTextContainer>
        </DropArea> */}
        <DropZone onDrop={acceptedFiles => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <DropArea {...getRootProps()}>
              <input {...getInputProps()} />
              {/* <div {...getRootProps()}>
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div> */}
              <DropGraphic src={dropGraphic} />
              <DropTextContainer>
                <DropText>
                  Drag &amp; drop your resume here or, click to upload.
                </DropText>
                <DropText smaller>(.pdf or .docx)</DropText>
              </DropTextContainer>
            </DropArea>
          )}
        </DropZone>
        <SubmitButton
          type="submit"
          disabled={submitted || submitting}
          onClick={() => setAttemptedSubmit(true)}
        >
          {submitting ? "Sending..." : "Submit Application"}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div({
  boxShadow: `0 50px 100px -20px rgba(50,50,93,.15), 0 30px 60px -30px rgba(0,0,0,.15), 0 -18px 60px -10px rgba(0,0,0,.015)`,
  display: "flex",
  flex: 1,
  flexDirection: "column",
  margin: "2rem 0 0 2rem",
  padding: "2rem"
});

const Form = styled.form({
  display: "flex",
  flexDirection: "column",
  height: "100%"
});

const FlexRow = styled.div({
  display: "flex",
  flexDirection: "row",
  flex: 1,
  "& > div:first-of-type": {
    marginRight: 15
  }
});

const Field = ({
  onChange,
  type = "text",
  name,
  value = "",
  required,
  label,
  attemptedSubmit
}) => {
  const getInput = () => {
    switch (type) {
      // case "dropdown":
      //   return (
      //     <DropDown
      //       className="input"
      //       type={type}
      //       name={name}
      //       onChange={onChange}
      //       id={name}
      //       required={required}
      //       value={value}
      //       attemptedSubmit={attemptedSubmit}
      //     />
      //   );
      default:
        return (
          <Input
            className="input"
            type={type}
            name={name}
            onChange={onChange}
            id={name}
            required={required}
            value={value}
            attemptedSubmit={attemptedSubmit}
          />
        );
    }
  };

  return (
    <FieldWrapper className="field">
      <Label className="label" htmlFor={name} required={required}>
        {label}
      </Label>
      <div className="control">{getInput()}</div>
    </FieldWrapper>
  );
};

const FieldWrapper = styled("div")({
  flex: 1,
  marginBottom: "1.25rem"
});

const Input = styled("input")(
  {
    width: "100%",
    height: 50,
    padding: "0 5px"
  },
  ({ theme, attemptedSubmit }) => ({
    border: `2px solid ${theme.mid.rgbaFunction(0.4)}`,
    "&:focus": {
      border: `2px solid ${theme.primary.color}`,
      outline: "none"
    },
    ...(attemptedSubmit
      ? {
          "&:invalid": {
            borderColor: "rgb(217, 55, 55)"
          }
        }
      : {})
  })
);

const Label = styled("label")({}, ({ required }) =>
  required
    ? {
        "&::after": {
          content: '"*"',
          marginLeft: 5,
          color: "rgb(235, 95, 50)"
        }
      }
    : null
);

const DropArea = styled.label({
  alignItems: "center",
  border: "4px dashed #d0d0d0",
  cursor: "pointer",
  display: "flex",
  flex: 5,
  justifyContent: "center",
  margin: "0.75rem 0 2rem 0",
  minHeight: 150,
  padding: "1rem"
});

const HiddenInput = styled.input({
  width: 0.1,
  height: 0.1
});

const DropTextContainer = styled.div({
  display: "flex",
  flex: 3,
  flexDirection: "column"
});

const DropText = styled.span(props => ({
  color: "#767776",
  display: "block",
  margin: "0.5rem 1rem",
  fontSize: props.smaller ? "1rem" : "1.25rem",
  fontWeight: props.smaller ? "500" : "300",
  textAlign: "center",
  userSelect: "none"
}));

const DropGraphic = styled.img({
  flex: 1
});

const SubmitButton = styled("button")(
  {
    alignSelf: "center",
    cursor: "pointer",
    padding: "9px 15px 6px 15px",
    border: "none",
    fontSize: 20,
    fontWeight: 500,
    justifySelf: "flex-end",
    maxWidth: "50%",
    textTransform: "uppercase"
  },
  ({ theme }) => ({
    background: theme.primary.color,
    color: theme.primary.textOn
  })
);
