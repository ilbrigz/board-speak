import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { slide as Menu } from "react-burger-menu"

const style = hasScrolled => ({
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "15px",
    top: hasScrolled ? "24px" : "28px",
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

const SliderMenu = ({ offsetY }) => {
  const [expanded, setExpanded] = useState(false)
  useEffect(() => {
    if (offsetY < -60) {
      setExpanded(true)
    } else if (offsetY >= -60 && expanded !== false) {
      setExpanded(false)
    }
  }, [offsetY])
  return (
    <Menu right styles={style(expanded)} pageWrapId={"page-wrap"}>
      <a id="home" className="menu-item" href="#">
        Home
      </a>
      <a id="about" className="menu-item" href="#">
        About
      </a>
      <a id="contact" className="menu-item" href="#">
        Contact
      </a>
      <a className="menu-item--small" href="#">
        Settings
      </a>
    </Menu>
  )
}

SliderMenu.propTypes = {
  siteTitle: PropTypes.string,
}

SliderMenu.defaultProps = {
  siteTitle: ``,
}

export default SliderMenu
