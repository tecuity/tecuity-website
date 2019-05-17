import React, { useState, useRef } from "react";
import styled from '@emotion/styled'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default () => {
  const [form, setForm] = useState({});
  const formRef = useRef()

  const handleSubmit = e => {
    e.preventDefault();
    console.log(encode({
      "form-name": 'demo-request',
      ...Object.entries(form).reduce(
        (obj, [key, x]) => ({ ...obj, [key]: x.value }),
        {}
      )
    }));
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": 'demo-request',
        ...Object.entries(form).reduce(
          (obj, [key, x]) => ({ ...obj, [key]: x.value }),
          {}
        )
      })
    })
      .then(() => {
        console.log("Submitted the form");
      })
      .catch(error => alert(error));
  };

  const handleChange = ({ target }) =>
    setForm(f => ({
      ...f,
      [target.name]: { ...(f[target.name] || {}), value: target.value }
    }));

  return (
    <FormWrapper
      name="demo-request"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <input type="hidden" name="form-name" value="demo-request" />
      <div hidden>
        <label>
          Don’t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </div>
      <Field
        label="First Name"
        name="firstname"
        onChange={handleChange}
        value={(form.firstname || {}).value}
        required
      />
      <Field
        label="Last Name"
        name="lastname"
        onChange={handleChange}
        value={(form.lastname || {}).value}
        required
      />
      <Field
        label="Organization"
        name="organization"
        onChange={handleChange}
        value={(form.organization || {}).value}
        required
      />
      <Field
        label="Email"
        name="email"
        type="email"
        onChange={handleChange}
        value={(form.email || {}).value}
        required
      />
      <Field
        label="Phone Number"
        name="phone"
        onChange={handleChange}
        value={(form.phone || {}).value}
        required
      />
      <Field
        label="What products or features are you most interested in learning about?"
        name="interests"
        type="textarea"
        onChange={handleChange}
        value={(form.interests || {}).value}
        required
      />
      <div className="field">
        <button className="button is-link" type="submit">
          Send
        </button>
      </div>
    </FormWrapper>
  );
};

const FormWrapper = styled('form')({

})

const Field = ({
  onChange,
  type = "text",
  name,
  value = "",
  required,
  label
}) => {
  const getInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            className="input"
            type={type}
            name={name}
            onChange={onChange}
            id={name}
            required={required}
            value={value}
          />
        );
      default:
        return (
          <input
            className="input"
            type={type}
            name={name}
            onChange={onChange}
            id={name}
            required={required}
            value={value}
          />
        );
    }
  };

  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className="control">{getInput()}</div>
    </div>
  );
};
