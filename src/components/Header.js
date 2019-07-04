import React, { useCallback, useState, useEffect } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
const Button = styled.button`
  background-color: #29a25d;
  margin-left: auto;
  color: #fff;
  margin-right: 70px;
  border: none;
  border-radius: 1rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  @media (min-width: 366px) {
    padding: 1rem;
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
  ${props =>
    props.expanded &&
    css`
      background-color: #316aaf;
      transform: translateY(-6px);
    `};
`
const StyledLogo = styled.h1`
  line-height: 2.25rem;
  font-size: 1.8rem;
  margin-bottom: 0;
  @media (max-width: 768px) {
  }
`
const Header = ({ offsetY }) => {
  const [expand, setExpand] = useState(false)
  useEffect(() => {
    if (offsetY < -60) {
      setExpand(true)
    } else {
      setExpand(false)
    }
  }, [offsetY])

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
          <StyledLogo>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <span style={{ color: `${!expand ? "#316AAF" : "#eeeeee"}` }}>
                Board
              </span>
              <span style={{ color: "#29A25D" }}>Speak</span>
            </Link>
          </StyledLogo>
        </div>
      </div>
      <Button>SIGN UP</Button>
    </SHeader>
  )
}

export default Header
