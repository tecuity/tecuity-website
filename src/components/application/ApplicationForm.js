import React, { useState, useRef } from "react";
import styled from "@emotion/styled";

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
  padding: "1.5rem"
});

const Form = styled.form();

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
  marginBottom: 20
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
