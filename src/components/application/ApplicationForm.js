import React, { useState, useRef, useCallback } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { useDropzone } from "react-dropzone";
import dropGraphic from "../../img/file_upload.svg";

const interests = [
  {
    name: "Junior Software Engineer",
    value: "junior-engineer"
  },
  {
    name: "Senior Software Engineer",
    value: "senior-engineer"
  },
  {
    name: "Database Administrator",
    value: "dba"
  },
  {
    name: "QA Engineer",
    value: "qa-engineer"
  },
  {
    name: "QA Manager",
    value: "qa-manager"
  },
  {
    name: "Project Manager",
    value: "project-manager"
  },
  {
    name: "Other",
    value: "other"
  }
];

export default () => {
  const [form, setForm] = useState({ interest: { value: interests[0].value } });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  let formRef = React.createRef()

  const handleSubmit = e => {
    setSubmitting(true);
    e.preventDefault();
    const body = new FormData(formRef.current)
    fetch("/", {
      method: "POST",
      body
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
        id="application-form"
        name="career-application"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <SuccessMessage show={submitted}>
          <SuccessDescription aria-live="polite">
            {submitted ? "Thank you for your application!" : null}
          </SuccessDescription>
          <SuccessDescription aria-live="polite">
            {submitted
              ? "If you're a good fit for our team, we'll be in touch."
              : null}
          </SuccessDescription>
        </SuccessMessage>
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </div>
        <input type="hidden" name="form-name" value="career-application"/>
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
          label="Phone Number"
          name="phone"
          type="tel"
          onChange={handleChange}
          value={(form.phone || {}).value}
          attemptedSubmit={attemptedSubmit}
          required
        />
        <Field
          label="Email"
          name="email"
          onChange={handleChange}
          value={(form.email || {}).value}
          attemptedSubmit={attemptedSubmit}
          required
        />
        <Field
          label="Interest"
          name="interest"
          onChange={handleChange}
          value={(form.interest || {}).value}
          type="select"
          attemptedSubmit={attemptedSubmit}
          required
        />
        {ResumeDropzone(resumeFile => {
          setForm(form => ({
            ...form,
            resumeFile: { value: resumeFile }
          }));
        }, form.resumeFile)}
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
    // aria-hidden and role="presentation" so that users using accessibility
    // features can use the HiddenInput without confusion.
    if (resumeFile) {
      return (
        <>
          <FormButton
            secondary
            type="button"
            onClick={() => handleChange(null)}
            aria-hidden={true}
            role="presentation"
          >
            Clear
          </FormButton>
          <DropText aria-hidden={true} role="presentation">
            {resumeFile.value.name}
          </DropText>
        </>
      );
    } else {
      return (
        <>
          <DropGraphic
            alt="Drop documents here"
            src={dropGraphic}
            aria-hidden={true}
            role="presentation"
          />
          <DropTextContainer aria-hidden={true} role="presentation">
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
      <HiddenLabel htmlFor="resume-upload">
        Upload your resume here.
      </HiddenLabel>
      {/* Set the default style to nothing so that my styles can override it for
       accessibility */}
      <HiddenInput
        aria-label="Resume upload"
        id="resume-upload"
        name="resume"
        {...getInputProps({ style: {} })}
      />
      {renderContent(resumeFile)}
    </DropArea>
  );
}

// This overrides the default `display: none` behavior and allows for
// better accessibility.
const HiddenInput = styled.input({
  height: 0.1,
  width: 0.1,
  opacity: 0.001,
  display: "block",
  position: "absolute"
});

const HiddenLabel = HiddenInput.withComponent("label");

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
      margin: "2rem 0 0 0",
      padding: 0
    }
  })
);

const Form = styled.form({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  position: "relative"
});

const FlexRow = styled.div({
  display: "flex",
  flexDirection: "row",
  flex: 1,
  "& > div:first-of-type": {
    marginRight: 15
  }
});

const interestOptions = interests.map(interest => (
  <option value={interest.value}>{interest.name}</option>
));

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
            {interestOptions}
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
    background: "white",
    borderRadius: 0,
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
  borderRadius: 18,
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

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const SuccessMessage = styled.div(
  props => ({
    alignItems: "center",
    animation: props.show ? `${fadeIn} 200ms` : "unset",
    animationFillMode: "forwards",
    background: "#fff",
    borderRadius: 4,
    display: "flex",
    flexDirection: "column",
    fontSize: 36,
    height: "100%",
    justifyContent: "center",
    left: 0,
    opacity: props.show ? 1 : 0,
    padding: 50,
    position: "absolute",
    textAlign: "center",
    top: 0,
    width: "100%",
    zIndex: props.show ? 1 : -1
  }),
  ({ theme }) => ({
    color: theme.primary.color
  })
);

const SuccessDescription = styled.p({
  fontSize: 24
});
