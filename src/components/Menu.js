import React, { memo, useState, useEffect } from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import styled from "styled-components"
import {
  FaCogs,
  FaHome,
  FaHandshake,
  FaUserClock,
  FaCalendarCheck,
} from "react-icons/fa"

const style = hasScrolled => ({
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "15px",
    top: hasScrolled ? "28px" : "34px",
  },
  bmBurgerBars: {
    background: hasScrolled ? "#eeeeee" : "#69696b",
    borderRadius: "3px",
    height: "5px",
  },
  bmBurgerBarsHover: {
    background: "#5c5c5e",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
  },
  bmItem: {
    display: "inline-block",
    marginTop: "1rem",
    color: "#ffffff",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
})
const StyledLink = styled(Link)`
  display: flex !important;
  text-decoration: none;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
  &:hover {
    color: #29a25d !important;
  }
`
const SubMenu = styled.div`
  padding-left: 1.6rem;
  margin-top: 0 !important;
  a {
    margin-top: 1rem;
    color: white;
    font-size: 0.8rem;
  }
`
const SliderMenu = props => {
  const [expanded, setExpanded] = useState(false)
  useEffect(() => {
    console.log(expanded)
    if (props.offsetY < -60 && expanded === false) {
      setExpanded(true)
    } else if (props.offsetY >= -60 && expanded === true) {
      setExpanded(false)
    }
  }, [props.offsetY])
  const { location } = props
  return (
    <Menu noOverlay right styles={style(expanded)} pageWrapId={"page-wrap"}>
      <StyledLink
        id="home"
        className="menu-item"
        to="/"
        style={{
          textDecoration: "none",
          color: checkLocation("home", location) ? "#29a25d" : "#ffffff",
        }}
      >
        <FaHome />
        Home
      </StyledLink>
      <SubMenu>
        <StyledLink
          to="/"
          style={{
            color: checkLocation("/", location) ? "#29a25d" : "#ffffff",
          }}
        >
          <FaCalendarCheck /> Meet Deadlines
        </StyledLink>
        <StyledLink
          to="/be-more-efficient"
          style={{
            color: checkLocation("/be-more-efficient", location)
              ? "#29a25d"
              : "#ffffff",
          }}
        >
          <FaUserClock />
          Manage Time
        </StyledLink>
        <StyledLink
          to="/engage-with-customers"
          style={{
            color: checkLocation("/engage-with-customers", location)
              ? "#29a25d"
              : "#ffffff",
          }}
        >
          <FaHandshake /> Retain Customers
        </StyledLink>
      </SubMenu>
      <StyledLink
        id="home"
        className="menu-item"
        to="/how-it-works"
        style={{
          textDecoration: "none",
          color: checkLocation("/how-it-works", location)
            ? "#29a25d"
            : "#ffffff",
        }}
      >
        <FaCogs />
        How It Works
      </StyledLink>
    </Menu>
  )
}
function checkLocation(location, locationProps) {
  if (
    location === "home" &&
    (locationProps === "/engage-with-customers" ||
      locationProps === "/be-more-efficient" ||
      locationProps === "/")
  ) {
    return true
  }
  return location === locationProps
}

SliderMenu.defaultProps = {
  siteTitle: ``,
}

export default SliderMenu
