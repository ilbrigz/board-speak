import React, { useState } from "react"
import { navigateTo } from "gatsby"
import axios from "axios"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
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
      axios
        .post("https://boardspeak-emaillist-bzykahvdgd.now.sh/api/email-list", {
          email: inputRef.current.value,
        })
        .then(res => {
          if (res.data.emailAdded) {
            window.location.href = "https://beta.boardspeak.com/Preregistration"
          } else {
            console.log(false)
          }
        })
    }
    return (
      <StyledHero>
        <SHeader style={springProps}>{pageTitle}</SHeader>
        <StyledP>{pageSubtitle}</StyledP>
        <StyledForm onSubmit={submitEmail}>
          <input ref={inputRef} type="email" placeholder="Email Address" />
          {/* <p
            style={{
              textAlign: "center",
              marginBottom: 0,
              color: "#D8000C",
              fontSize: ".8rem",
            }}
          >
            Please provide a valid input
          </p> */}
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
