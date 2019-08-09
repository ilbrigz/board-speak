import React, { useState } from "react"
import { navigateTo } from "gatsby"
import axios from "axios"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const SHeader = styled(animated.h1)`
  text-align: center;
  margin-top: 3rem;
  color: #316aaf;
`
const StyledP = styled.p`
  color: #5c5c5e;
  text-align: center;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  min-width: 250px;
  margin: 0.5rem 1rem;
  input,
  button {
    border-radius: 1rem;
    border: 3px solid #29a25d;
    padding: 1rem;
    &:focus {
      outline: none;
    }
  }
  button {
    margin-top: 6px;
    background-color: #29a25d;
    color: #fff;
    text-transform: uppercase;
  }
`
const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
  padding-bottom: 5rem;
  @media (max-width: 570px) {
    padding-bottom: 0;
  }
`
const StyledImage = styled.div`
  @media (min-width: 570px) {
    width: 70%;
    max-width: 800px;
    min-width: 500px;
  }
`
const Hero = React.memo(
  ({
    pageSubtitle,
    pageTitle,
    location,
    heroSubtitle,
    inputRef,
    HeroImage,
  }) => {
    const [msg, setMsg] = useState({ type: "", msg: "" })

    const springProps = useSpring({
      config: {
        duration: 600,
      },
      opacity: 1,
      from: { opacity: 0 },
    })
    const submitEmail = event => {
      event.preventDefault()

      if (!inputRef.current.value) {
        return
      }
      const emailValid = validateEmail(inputRef.current.value)
      if(!emailValid) {
        setMsg({ type: "ERR", msg: "Please send a valid email." })
        return;
      }
      setMsg({ type: "SENDING", msg: "Sending to the database..." })

      axios
        .post("https://boardspeak-emaillist-bzykahvdgd.now.sh/api/email-list", {
          email: inputRef.current.value,
        })
        .then(res => {
          console.log(res.data)
          if (res.data.emailAdded) {
            setMsg({
              type: "SUCCESS",
              msg: "You will be forwarded to the registration form",
            })
            window.location.href = "https://beta.boardspeak.com/Preregistration"
          }
        })
        .catch(error => {
          console.log(error.response.data)
          switch (error.response.data.error.code) {
            case "ER_DUP_ENTRY":
              setMsg({ type: "ER_DUP_ENTRY", msg: "Email already in use. Please try another." })
              break
            default:
              setMsg({ type: "", msg: "" })
              break
          }
        })
    }
    return (
      <StyledHero>
        <SHeader style={springProps}>{pageTitle}</SHeader>
        <StyledP>{pageSubtitle}</StyledP>
        <StyledForm onSubmit={submitEmail}>
          <input ref={inputRef} type="email" placeholder="Email Address" />
          <p
            style={{
              textAlign: "center",
              marginBottom: 0,
              color:
                msg.type !== "SENDING"
                  ? msg.type === "SUCCESS"
                    ? "#29a25d"
                    : "#D8000C"
                  : "#316aaf",
              fontSize: ".8rem",
              opacity: 0.8,
            }}
          >
            {msg.msg}
          </p>
          <button style={{ cursor: "pointer" }} type="submit">
            Sign up for beta
          </button>
        </StyledForm>
        <StyledP>{heroSubtitle}</StyledP>
        <br></br>
        <StyledImage>{<HeroImage />}</StyledImage>
      </StyledHero>
    )
  }
)
export default Hero
