import React, { useState, useRef } from "react";
import styled from '@emotion/styled'
import InfoBox from './InfoBox'
import panels1 from '../../img/panels-1.svg'
import panels2 from '../../img/panels-2.svg'
import sosLogo from '../../img/sos-logo-green.svg'
import chatIcon from '../../img/chat.svg'

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
    <Wrapper>
      <InnerWrapper>
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
          <Row>
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
          </Row>
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
          <ButtonWrapper className="field">
            <SubmitButton type="submit">
              Send Request
            </SubmitButton>
          </ButtonWrapper>
          <TopLeft src={panels1} />
          <BottomRight src={panels2} />
        </FormWrapper>
        <Sidebar>
          <InfoBox
            iconSrc={sosLogo}
            title="See SOS Enterprise in Action"
            description="Drop us a note and we'll setup a time for a hands-on demonstration."
          />
          <InfoBox
            iconSrc={chatIcon}
            title="Give us a Call"
            description={
              <span>
                Our dedicated sales staff may be reached toll-free at <a href="tel:1-888-832-8489">1-888-TECUITY</a>
              </span>
            }
          />
        </Sidebar>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  zIndex: 5,
  marginBottom: '15vh'
}, ({theme}) => ({
  maxWidth: theme.maxWidth,
  [theme.media.max.lg]: {
    padding: '0px 15px'
  }
}))

const InnerWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  marginTop: '5vh',
  marginRight: '-10vw'
})

const Sidebar = styled('div')({
  padding: 30,
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  paddingBottom: '25%'
}, ({theme}) => ({
  // background: theme.primary.color
}))

const FormWrapper = styled('form')({
  position: 'relative',
  width: '100%',
  maxWidth: 500,
  padding: 30,
  borderRadius: 4,
  // borderTopRightRadius: 0,
  // borderBottomRightRadius: 0,
  background: '#ffffff',
  boxShadow: `0 50px 100px -20px rgba(50,50,93,.15), 0 30px 60px -30px rgba(0,0,0,.15), 0 -18px 60px -10px rgba(0,0,0,.015)`
})

const TopLeft = styled('img')({
  position: 'absolute',
  top: '-7%',
  left: '-40%',
  width: '75%',
  zIndex: -1
})

const BottomRight = styled('img')({
  position: 'absolute',
  bottom: '-15%',
  right: '-60%',
  width: '75%',
  zIndex: -2
})

const ButtonWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center'
})

const SubmitButton = styled('button')({
  padding: '9px 15px 7px 15px',
  border: 'none',
  fontSize: 20,
  fontWeight: 500,
  textTransform: 'uppercase'
}, ({theme}) => ({
  background: theme.primary.color,
  color: theme.primary.textOn
}))

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
          <TextArea
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
          <Input
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
    <FieldWrapper className="field">
      <Label className="label" htmlFor={name}>
        {label}
      </Label>
      <div className="control">{getInput()}</div>
    </FieldWrapper>
  );
};

const Row = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  '& > div': {
    flex: '1 0 auto',
    '&:first-of-type': {
      marginRight: 15
    }
  }
})

const FieldWrapper = styled('div')({
  marginBottom: 20
})

const Input = styled('input')({
  width: '100%',
  height: 50
}, ({theme}) => ({
  border: `2px solid ${theme.mid.rgbaFunction(.4)}`,
  '&:focus': {
    border: `2px solid ${theme.primary.color}`,
    outline: 'none'
  }
}))

const TextArea = styled('textarea')({
  width: '100%',
  height: 150
}, ({theme}) => ({
  border: `2px solid ${theme.mid.rgbaFunction(.4)}`,
  '&:focus': {
    border: `2px solid ${theme.primary.color}`,
    outline: 'none'
  }
}))

const Label = styled('label')({

})
