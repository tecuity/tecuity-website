import React, { useState, useRef, useCallback } from "react";
import styled from "@emotion/styled";
import { useDropzone } from "react-dropzone";
import dropGraphic from "../../img/file_upload.svg";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default () => {
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  // const formRef = useRef();

  const handleSubmit = e => {
    setSubmitting(true);
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "job-application",
        ...Object.entries(form).reduce(
          (obj, [key, x]) => ({ ...obj, [key]: x.value }),
          {}
        )
      })
    })
      .then(() => {
        setSubmitting(false);
        setSubmitted(true);
      })
      .catch(error => {
        console.error(error);
        setSubmitting(false);
      });
  };

  const handleChange = ({ target }) =>
    setForm(f => ({
      ...f,
      [target.name]: { ...(f[target.name] || {}), value: target.value }
    }));

  return (
    <FormContainer>
      <Form
        name="job-application"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        // ref={formRef}
      >
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
          type="select"
          attemptedSubmit={attemptedSubmit}
          required
        />
        {ResumeDropzone(
          resumeFile =>
            setForm(form => ({
              ...form,
              resumeFile: resumeFile
            })),
          form.resumeFile
        )}
        <FormButton
          type="submit"
          disabled={submitted || submitting}
          onClick={() => setAttemptedSubmit(true)}
        >
          {submitting ? "Sending..." : "Submit Application"}
        </FormButton>
      </Form>
    </FormContainer>
  );
};

function ResumeDropzone(handleChange, resumeFile) {
  // Accept .pdf and .docx
  let acceptedFiles = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    handleChange(acceptedFiles[0]);
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: acceptedFiles,
    disabled: resumeFile ? true : false,
    maxSize: 1000000, // 1MB
    multiple: false,
    onDrop: onDrop
  });

  const renderContent = resumeFile => {
    if (resumeFile) {
      return (
        <>
          <FormButton
            secondary
            type="button"
            onClick={() => handleChange(null)}
          >
            Clear
          </FormButton>
          <DropText>{resumeFile.name}</DropText>
        </>
      );
    } else {
      return (
        <>
          <DropGraphic src={dropGraphic} />
          <DropTextContainer>
            <DropText>
              Drag &amp; drop your resume here or, click to upload.
            </DropText>
            <DropText smaller>(.pdf or .docx)</DropText>
          </DropTextContainer>
        </>
      );
    }
  };

  return (
    <DropArea {...getRootProps({ resumeFile: resumeFile })}>
      <input
        {...getInputProps({
          // This overrides the default `display: none` behavior and allows for
          // better accessibility.
          style: {
            height: 0.1,
            width: 0.1,
            opacity: 0.001,
            display: "block"
          }
        })}
      />
      {renderContent(resumeFile)}
    </DropArea>
  );
}

const FormContainer = styled.div(
  {
    boxShadow: `0 50px 100px -20px rgba(50,50,93,.15), 0 30px 60px -30px rgba(0,0,0,.15), 0 -18px 60px -10px rgba(0,0,0,.015)`,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    margin: "2rem 0 0 2rem",
    padding: "2rem"
  },
  ({ theme }) => ({
    [theme.media.max.md]: {
      boxShadow: "unset",
      margin: "2rem 0 0 0"
    }
  })
);

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
      case "select":
        return (
          <SelectField
            className="input"
            type={type}
            name={name}
            onChange={onChange}
            id={name}
            required={required}
            value={value}
            attemptedSubmit={attemptedSubmit}
          >
            <option value="frontend-engineering">
              Frontend Software Engineering
            </option>
            <option value="backend-engineering">
              Backend Software Engineering
            </option>
            <option value="qa-testing">QA Testing</option>
            <option value="marketing">Marketing</option>
            <option value="management">Management</option>
          </SelectField>
        );
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

const SelectField = styled.select(
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

const DropArea = styled.div(props => ({
  alignItems: "center",
  border: "4px dashed #d0d0d0",
  cursor: props.resumeFile ? "normal" : "pointer",
  display: "flex",
  flex: 5,
  justifyContent: "center",
  margin: "0.75rem 0 2rem 0",
  minHeight: 150,
  padding: "1rem"
}));

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

const FormButton = styled.button(
  props => ({
    alignSelf: "center",
    cursor: "pointer",
    padding: props.secondary ? "5px 10px 3px 10px" : "9px 15px 6px 15px",
    border: "none",
    fontSize: props.secondary ? 16 : 20,
    fontWeight: 500,
    justifySelf: "flex-end",
    maxWidth: "50%",
    textTransform: "uppercase"
  }),
  ({ theme }) => ({
    background: theme.primary.color,
    color: theme.primary.textOn,
    [theme.media.max.md]: {
      maxWidth: "100%"
    }
  })
);
