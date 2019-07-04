import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MobileSvg from "../images/mobile-marketing.js"
import Fade from "react-reveal"

const SHeader = styled.h1`
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
`
const StyledImage = styled.div`
  @media (min-width: 570px) {
    width: 70%;
    max-width: 800px;
    min-width: 500px;
  }
`
export default function Hero() {
  return (
    <StyledHero>
      <SHeader>
        <Fade duration={6000}>
          Help team members be accountable & meet deadlines!
        </Fade>
      </SHeader>
      <StyledP>Let your team get tasks and assignments done on time!</StyledP>
      <StyledForm>
        <input type="email" placeholder="Email Address" />
        <button>Sign up for beta</button>
      </StyledForm>
      <StyledP>
        Get Early access and exclusive in app perks, by signing up before our
        official launch!
      </StyledP>
      <br></br>
      <StyledImage>
        <MobileSvg />
      </StyledImage>
    </StyledHero>
  )
}
