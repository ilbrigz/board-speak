import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import styled, { css } from "styled-components"
import logo from "../images/logo.png"

const Button = styled.button`
  background-color: #29a25d;
  margin-left: auto;
  cursor: pointer;
  color: #fff;
  margin-right: 70px;
  border: none;
  border-radius: 1rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
  @media (min-width: 366px) {
    padding: 1rem;
  }
  @media (max-width: 500px) {
    display: none;
  }
`
const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fffff;
  margin-bottom: 1.45rem;
  z-index: 999;
  transition: all 0.2s ease-out;
  @media (min-width: 500px) {
    margin-top: -6px;
  }
  @media (max-width: 500px) {
    justify-content: left;
  }
  ${props =>
    props.expanded &&
    css`
      background-color: #316aaf;
      transform: translateY(-6px);
    `};
`
const StyledH1 = styled.h1`
  line-height: 2.25rem;
  display: flex;
  flex-direction: row;
  justify-items: center;
  font-size: 1.8rem;
  margin-bottom: 0;
  @media (max-width: 768px) {
  }
`
const StyledImg = styled.img`
  padding: 0;
  margin-bottom: 0;
  margin-right: 5px;
  width: 3rem;
  // @media (max-width: 500px) {
  //   display: none;
  // }
`
const Header = ({ offsetY, inputRef, history }) => {
  const [expand, setExpand] = useState(false)
  useEffect(() => {
    if (offsetY < -60) {
      setExpand(true)
    } else {
      setExpand(false)
    }
  }, [offsetY])
  const focusInput = () => {
    if (!inputRef) {
      navigate("/")
      return
    }
    inputRef.current.focus()
  }
  console.log(history)
  return (
    <SHeader expanded={expand}>
      <div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
            display: `flex`,
            alignItems: "center",
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              flexDirection: "row",
              color: `white`,
              alignItems: "center",
              justifyContent: "center",
              textDecoration: `none`,
            }}
          >
            {" "}
            <StyledImg src={logo} />
            <StyledH1>
              <span style={{ color: `${!expand ? "#316AAF" : "#eeeeee"}` }}>
                Board
              </span>
              <span style={{ color: "#29A25D" }}>Speak</span>
            </StyledH1>
          </Link>
        </div>
      </div>
      <Button onClick={focusInput}>SIGN UP</Button>
    </SHeader>
  )
}

export default Header
