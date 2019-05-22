import React, { useState, useRef } from "react";
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import InfoBox from './InfoBox'
import TopLeftAnimation from './TopLeftAnimation'
import BottomRightAnimation from './BottomRightAnimation'
import sosLogo from '../../img/sos-logo-green.svg'
import chatIcon from '../../img/chat.svg'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default () => {
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)
  const formRef = useRef()

  const handleSubmit = e => {
    setSubmitting(true)
    e.preventDefault();
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
        setSubmitting(false)
        setSubmitted(true)
      })
      .catch(error => {
        console.error(error)
        setSubmitting(false)
      });
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
          {
            submitted &&
            <SuccessMessage>
              Thanks! <br/>
              <SuccessDescription>We've received your request and will be in touch shortly.</SuccessDescription>
            </SuccessMessage>
          }
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
          </Row>
          <Field
            label="Organization"
            name="organization"
            onChange={handleChange}
            value={(form.organization || {}).value}
            attemptedSubmit={attemptedSubmit}
            required
          />
          <Field
            label="Email"
            name="email"
            type="email"
            onChange={handleChange}
            value={(form.email || {}).value}
            attemptedSubmit={attemptedSubmit}
            required
          />
          <Field
            label="Phone Number"
            name="phone"
            onChange={handleChange}
            value={(form.phone || {}).value}
            attemptedSubmit={attemptedSubmit}
            required
          />
          <Field
            label="What products or features are you most interested in learning about?"
            name="interests"
            type="textarea"
            onChange={handleChange}
            value={(form.interests || {}).value}
            attemptedSubmit={attemptedSubmit}
            required
          />
          <ButtonWrapper className="field">
            <SubmitButton type="submit" disabled={submitted || submitting} onClick={() => setAttemptedSubmit(true)}>
              {submitting ? 'Sending...' : 'Send Request'}
            </SubmitButton>
          </ButtonWrapper>
          <TopLeft>
            <TopLeftAnimation />
          </TopLeft>
          <BottomRight>
            <BottomRightAnimation />
          </BottomRight>
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
    padding: '0px 15px',
    '& h3': {
      marginTop: 0
    }
  },
  [theme.media.max.md]: {
    overflow: 'hidden',
    marginBottom: 0,
    paddingBottom: '15vh'
  }
}))

const InnerWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  marginTop: '5vh',
  marginRight: '-10vw'
}, ({theme}) => ({
  [theme.media.max.md]: {
    flexDirection: 'column-reverse',
    width: '100%',
    alignItems: 'center',
    marginRight: 0,
    marginTop: 0
  }
}))

const Sidebar = styled('div')({
  padding: 30,
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  paddingBottom: '25%'
}, ({theme}) => ({
  [theme.media.max.md]: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingBottom: 30
  },
  [theme.media.max.sm]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
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
}, ({theme}) => ({
  [theme.media.max.lg]: {
    maxWidth: 440
  }
}))

const TopLeft = styled('div')({
  position: 'absolute',
  top: '-7%',
  left: '-40%',
  width: '75%',
  zIndex: -1,
  '& svg': {
    width: '100%'
  }
})

const BottomRight = styled('div')({
  position: 'absolute',
  bottom: '-15%',
  right: '-60%',
  width: '75%',
  zIndex: -2,
  '& svg': {
    width: '100%'
  }
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
  label,
  attemptedSubmit
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
            attemptedSubmit={attemptedSubmit}
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

const Row = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  '& > div': {
    flex: '1 0 auto',
    '&:first-of-type': {
      marginRight: 15
    }
  }
}, ({theme}) => ({
  [theme.media.max.md]: {
    flexDirection: 'column',
    '& > div': {
      flex: '1 0 auto',
      '&:first-of-type': {
        marginRight: 15
      }
    }
  }
}))

const FieldWrapper = styled('div')({
  marginBottom: 20
})

const Input = styled('input')({
  width: '100%',
  height: 50
}, ({theme, attemptedSubmit}) => ({
  border: `2px solid ${theme.mid.rgbaFunction(.4)}`,
  '&:focus': {
    border: `2px solid ${theme.primary.color}`,
    outline: 'none'
  },
  ...(attemptedSubmit ? ({
    '&:invalid': {
      borderColor: 'rgb(217, 55, 55)'
    }
  }) : {})
}))

const TextArea = styled('textarea')({
  width: '100%',
  height: 150,
  resize: 'vertical'
}, ({theme, attemptedSubmit}) => ({
  border: `2px solid ${theme.mid.rgbaFunction(.4)}`,
  '&:focus': {
    border: `2px solid ${theme.primary.color}`,
    outline: 'none'
  },
  ...(attemptedSubmit ? ({
    '&:invalid': {
      borderColor: 'rgb(217, 55, 55)'
    }
  }) : {})
}))

const Label = styled('label')({

}, ({required}) => required ? {
  '&::after': {
    content: '"*"',
    marginLeft: 5,
    color: 'rgb(235, 95, 50)'
  }
} : null)

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

const SuccessMessage = styled('div')({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  background: '#fff',
  borderRadius: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 36,
  textAlign: 'center',
  padding: 50,
  flexDirection: 'column',
  animation: `${fadeIn} 200ms`,
  animationFillMode: 'forwards'
}, ({theme}) => ({
  color: theme.primary.color
}))

const SuccessDescription = styled('p')({
  fontSize: 24
})
